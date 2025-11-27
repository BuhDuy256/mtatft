import pandas as pd
import numpy as np
from sqlalchemy import text
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.decomposition import PCA
try:
    from sklearn.cluster import HDBSCAN
except ImportError:
    try:
        import hdbscan as HDBSCAN
    except ImportError:
        raise ImportError("Please install hdbscan: `conda install -c conda-forge hdbscan`")

from typing import List, Dict, Tuple
import ast

def analyze_top_comps(df: pd.DataFrame, n_clusters: int = 25) -> pd.DataFrame:
    print(f"\n{'='*60}")
    print(f"Starting Meta Comps Analysis with HDBSCAN")
    print(f"{'='*60}")
    print(f"Total matches: {len(df)}")
    if n_clusters:
        print(f"(Note: n_clusters={n_clusters} argument is ignored by HDBSCAN as it auto-detects clusters)")
    if df.empty:
        print("No data to analyze")
        return pd.DataFrame()
    if 'placement' not in df.columns or 'units' not in df.columns:
        raise ValueError("DataFrame must contain 'placement' and 'units' columns")
    df = prepare_match_data(df)
    print("\n[Step 1] Feature Engineering - One-Hot Encoding...")
    mlb = MultiLabelBinarizer()
    X_binary = mlb.fit_transform(df['units'])
    feature_names = list(mlb.classes_)
    print(f"  Encoded {len(feature_names)} unique units")
    print(f"  Feature matrix shape: {X_binary.shape}")
    print("\n[Step 2] PCA - Reducing dimensions...")
    n_components = min(20, X_binary.shape[1])
    pca = PCA(n_components=n_components, random_state=42)
    X_pca = pca.fit_transform(X_binary)
    explained_var = pca.explained_variance_ratio_.sum()
    print(f"  Reduced to {n_components} components")
    print(f"  Explained variance: {explained_var:.2%}")
    print("\n[Step 3] Running HDBSCAN Clustering...")
    min_size = max(10, int(len(df) * 0.005))
    hdbscan_model = HDBSCAN(
        min_cluster_size=min_size,
        min_samples=5,
        metric='euclidean',
        cluster_selection_method='eom'
    )
    if hasattr(hdbscan_model, 'fit_predict'):
        labels = hdbscan_model.fit_predict(X_pca)
    else:
        hdbscan_model.fit(X_pca)
        labels = hdbscan_model.labels_
    df['cluster_label'] = labels
    n_clusters_found = len(set(labels)) - (1 if -1 in labels else 0)
    n_noise = list(labels).count(-1)
    print(f"  Found {n_clusters_found} raw clusters")
    print(f"  Filtered out {n_noise} noise matches ({n_noise/len(df)*100:.1f}%)")
    print("\n[Step 4] Analyzing Each Cluster...")
    comp_results = []
    unique_labels = [l for l in set(labels) if l != -1]
    for label in unique_labels:
        mask = df['cluster_label'] == label
        cluster_matches = df[mask]
        cluster_matrix = X_binary[mask]
        play_count = len(cluster_matches)
        avg_placement = cluster_matches['placement'].mean()
        win_rate = (cluster_matches['placement'] == 1).sum() / play_count
        top4_rate = (cluster_matches['placement'] <= 4).sum() / play_count
        pick_rate = play_count / len(df)
        core_units, flex_units, standard_comp, unit_frequencies = _identify_key_units(
            cluster_matrix, feature_names
        )
        if len(standard_comp) < 5:
            continue
        comp_name = _generate_comp_name(core_units, standard_comp)
        comp_results.append({
            'cluster_id': label,
            'comp_name': comp_name,
            'standard_comp': standard_comp,
            'core_units': core_units,
            'flex_units': flex_units,
            'unit_frequencies': unit_frequencies,
            'avg_placement': round(avg_placement, 2),
            'top4_rate': round(top4_rate, 4),
            'win_rate': round(win_rate, 4),
            'pick_rate': round(pick_rate, 4),
            'play_count': play_count
        })
    print(f"  Analyzed {len(comp_results)} valid meta comps (removed short/bugged clusters)")
    print("\n[Step 5] Sorting Results...")
    result_df = pd.DataFrame(comp_results)
    if result_df.empty:
        print("No valid comps found after filtering.")
        return pd.DataFrame()
    result_df = result_df.sort_values(['play_count', 'avg_placement'], ascending=[False, True])
    result_df = result_df.reset_index(drop=True)
    print(f"  Final Meta List: {len(result_df)} comps")
    print(f"\n{'='*60}")
    print("Top 5 Meta Comps Preview:")
    pd.set_option('display.max_colwidth', 100)
    print(result_df.head()[['comp_name', 'standard_comp', 'avg_placement', 'play_count']])
    print(f"{'='*60}\n")
    return result_df

def _identify_key_units(
    cluster_matrix: np.ndarray,
    feature_names: List[str]
) -> Tuple[List[str], List[str], List[str], Dict[str, float]]:
    mean_freq = cluster_matrix.mean(axis=0)
    sorted_indices = mean_freq.argsort()[::-1]
    potential_indices = [i for i in sorted_indices if mean_freq[i] > 0.15]
    if len(potential_indices) < 5:
        final_standard_indices = sorted_indices[:8]
    else:
        final_standard_indices = potential_indices[:8]
    standard_comp = [feature_names[i] for i in final_standard_indices]
    core_indices = [i for i, freq in enumerate(mean_freq) if freq > 0.70]
    core_units = [feature_names[i] for i in core_indices]
    flex_indices = [i for i, freq in enumerate(mean_freq) if 0.30 <= freq <= 0.70]
    flex_units = [feature_names[i] for i in flex_indices]
    freq_dict = {
        feature_names[i]: round(mean_freq[i], 3)
        for i in sorted_indices
        if mean_freq[i] > 0.10
    }
    return core_units, flex_units, standard_comp, freq_dict

def _generate_comp_name(core_units: List[str], standard_comp: List[str]) -> str:
    targets = core_units if len(core_units) >= 2 else standard_comp[:4]
    if not targets:
        return "Unknown Comp"
    def clean_name(name):
        return name.split('_')[-1]
    clean_targets = [clean_name(u) for u in targets]
    if len(clean_targets) == 1:
        return clean_targets[0]
    elif len(clean_targets) == 2:
        return f"{clean_targets[0]}, {clean_targets[1]}"
    else:
        return f"{clean_targets[0]}, {clean_targets[1]}, {clean_targets[2]}"

def prepare_match_data(df_raw: pd.DataFrame) -> pd.DataFrame:
    df = df_raw.copy()
    if df.empty:
        return df
    first_item = df['units'].iloc[0]
    if isinstance(first_item, str):
        try:
            df['units'] = df['units'].apply(
                lambda x: ast.literal_eval(x) if isinstance(x, str) else x
            )
        except (ValueError, SyntaxError):
            print("Error parsing 'units' column. Ensure it is a valid list string.")
    return df

def analyze_comps_for_patch(engine, patch_version):
    print(f"\n=== Analyzing Comps for Patch {patch_version} ===")
    query = text("""
        SELECT 
            p.match_id,
            p.puuid,
            p.placement,
            ARRAY_AGG(mu.unit_id ORDER BY mu.unit_id) as units
        FROM matches m
        JOIN participants p ON m.id = p.match_id 
        JOIN match_units mu ON 
            p.match_id = mu.match_id AND
            p.puuid = mu.puuid
        WHERE 
            m.game_version LIKE :version_pattern
        GROUP BY p.match_id, p.puuid, p.placement
    """)
    params = {"version_pattern": f"%<Releases/{patch_version}>%"}
    df = pd.read_sql(query, engine, params=params)
    print(f"Loaded {len(df)} match records")
    if df.empty:
        print("No match data found!")
        return pd.DataFrame()
    comp_stats_df = analyze_top_comps(df, n_clusters=25)
    return comp_stats_df
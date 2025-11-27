# HDBSCAN Clustering Configuration
HDBSCAN_MIN_CLUSTER_SIZE_RATIO = 0.005  # 0.5% of total matches
HDBSCAN_MIN_SAMPLES = 5
HDBSCAN_METRIC = 'euclidean'
HDBSCAN_CLUSTER_SELECTION_METHOD = 'eom'

# PCA Configuration
PCA_N_COMPONENTS = 20  # Number of dimensions to reduce to
PCA_RANDOM_STATE = 42

# Comp Analysis Thresholds
STANDARD_COMP_SIZE = 8  # Number of champions in standard comp (Level 8)
CORE_UNIT_THRESHOLD = 0.70  # Champion appears > 70% = Core
FLEX_UNIT_MIN_THRESHOLD = 0.30  # Flex unit minimum 30%
FLEX_UNIT_MAX_THRESHOLD = 0.70  # Flex unit maximum 70%
MIN_UNIT_FREQUENCY_TO_STORE = 0.10  # Only store units > 10% frequency

# Filtering
MIN_STANDARD_COMP_SIZE = 5  # Ignore comps with < 5 champions (error)
MIN_UNIT_FREQUENCY_FOR_STANDARD = 0.15  # Champion > 15% to be included in standard comp
MAX_TOP_COMPS = 15  # Maximum number of top comps to return (set None for all comps)

# Tier Calculation (based on avg_placement)
TIER_S_MAX = 4.10  # S-Tier: <= 4.10
TIER_A_MAX = 4.40  # A-Tier: <= 4.40
TIER_B_MAX = 4.70  # B-Tier: <= 4.70
TIER_C_MAX = 5.00  # C-Tier: <= 5.00
# D-Tier: > 5.00
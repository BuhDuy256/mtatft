# Frontend Structure Documentation

> **Note**: This document captures the frontend structure as of December 27, 2025.

## Overview

The frontend is a **React 19** single-page application built with **Vite** and **TypeScript**. It uses **React Router** for client-side routing and **TailwindCSS 4** for styling.

## Technology Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Language**: TypeScript 5.9.3
- **Routing**: React Router DOM 7.9.6
- **Styling**: TailwindCSS 4.1.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React 0.555.0
- **HTTP Client**: Native Fetch API
- **Notifications**: React Hot Toast 2.6.0
- **State Management**: React Context API

## Project Structure

```
src/frontend/
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   │   ├── common/          # Header, Footer
│   │   ├── ui/              # Shadcn/Radix UI primitives
│   │   └── [feature].tsx    # Feature components
│   ├── contexts/            # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Page layouts
│   ├── pages/               # Page components
│   ├── routes/              # Route definitions
│   ├── services/            # API service functions
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Architecture & Data Flow

### Application Bootstrap

```
main.tsx
    ↓
React.StrictMode
    ↓
BrowserRouter (react-router-dom)
    ↓
MetadataProvider (Context)
    ↓
App.tsx
    ↓
AppRouter (Routes)
    ↓
Pages
```

### Component Hierarchy

```
App
├── MetadataContext (global state - units, traits, items)
├── Toaster (notifications)
└── AppRouter
    └── Routes
        ├── / → TeamCompositions
        ├── /units → Units
        ├── /items → Items
        ├── /traits → Traits
        ├── /home → Home
        └── /team-builder → TeamBuilder
```

---

## API Fetching Pattern

### Pattern 1: Global Metadata via Context

The application uses React Context to load and share **metadata** (units, traits, items) across all pages.

**File**: `contexts/MetadataContext.tsx`

```typescript
// MetadataProvider wraps entire app
export function MetadataProvider({ children }) {
  const [data, setData] = useState<Metadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMetadata() {
      try {
        setIsLoading(true);
        const metadata = await fetchMetadata();
        setData(metadata);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadMetadata();
  }, []); // Runs once on mount

  return (
    <MetadataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </MetadataContext.Provider>
  );
}

// Hook to consume metadata
export function useMetadata() {
  const context = useContext(MetadataContext);
  if (!context) throw new Error("useMetadata must be within MetadataProvider");
  return context;
}
```

**Usage in pages**:

```typescript
const { data: metadata, isLoading, error } = useMetadata();
```

### Pattern 2: Page-Level Data Fetching

Each page fetches its own **stats data** using `useEffect` with local component state.

**Example**: `pages/TeamCompositions.tsx`

```typescript
export default function TeamCompositions() {
  const { data: metadata } = useMetadata(); // From context
  const [rawComps, setRawComps] = useState<TopComp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTopComps() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchTopComps(); // From services

        if (response?.topComps && Array.isArray(response.topComps)) {
          setRawComps(response.topComps);
        } else {
          setRawComps([]);
        }
      } catch (err) {
        setError(err.message);
        setRawComps([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadTopComps();
  }, []); // Runs once on mount

  // Enrich raw data with metadata using useMemo
  const enrichedComps = useMemo(() => {
    if (!metadata || !rawComps.length) return [];
    return rawComps.map((comp) => ({
      // ... transform and enrich with metadata
    }));
  }, [rawComps, metadata]);

  // Render based on state
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  return <Content data={enrichedComps} />;
}
```

### Pattern Summary

| Data Type                       | Fetch Location   | State Management | Reload Trigger |
| ------------------------------- | ---------------- | ---------------- | -------------- |
| Metadata (units, traits, items) | Context Provider | Global (Context) | App mount only |
| Stats (comps, unit stats, etc.) | Page component   | Local (useState) | Page mount     |

---

## Service Layer

### Location: `services/`

Services are async functions that:

1. Fetch data from API
2. Validate response structure
3. Return typed data or throw errors

**File**: `services/metadata.service.ts`

```typescript
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export async function fetchMetadata(): Promise<Metadata> {
  const response = await fetch(`${API_BASE_URL}/metadata`);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  const apiResponse: ApiResponse<Metadata> = await response.json();

  if (!apiResponse.success || !apiResponse.data) {
    throw new Error("Invalid API response structure");
  }

  return apiResponse.data;
}
```

**File**: `services/stats.service.ts`

```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export async function fetchTopComps(): Promise<TopCompsResponse> { ... }
export async function fetchUnitStats(): Promise<UnitStatsResponse> { ... }
export async function fetchItemStats(): Promise<ItemStatsResponse> { ... }
export async function fetchTraitStats(): Promise<TraitStatsResponse> { ... }
```

### API Base URL

- Default: `http://localhost:3000` (or `/api` for metadata)
- Overridable via: `VITE_API_BASE_URL` environment variable

---

## Component Reloading Pattern

### When Components Reload

| Scenario          | Action                                    |
| ----------------- | ----------------------------------------- |
| Initial page load | Fetch data on mount (`useEffect([], [])`) |
| Route change      | Component unmounts/mounts → fresh fetch   |
| Browser refresh   | Full reload → context re-fetches metadata |
| Error retry       | `window.location.reload()` (hard reload)  |

### No Automatic Refresh

The current implementation does **NOT** include:

- Polling/interval refresh
- WebSocket real-time updates
- Cache invalidation
- Refetch on focus

### Manual Refresh Pattern

```typescript
// Error state provides manual retry via full page reload
if (error) {
  return <button onClick={() => window.location.reload()}>Retry</button>;
}
```

---

## Data Enrichment Pattern

Pages combine **raw API data** with **metadata** using `useMemo`:

```typescript
const enrichedComps = useMemo(() => {
  if (!metadata || !rawComps.length) return [];

  return rawComps.map((comp) => {
    // Find unit details from metadata
    const unitDetail = metadata.units.find(
      (m) => m.id.toLowerCase() === comp.id.toLowerCase()
    );

    return {
      ...comp,
      name: unitDetail?.name || comp.name,
      imageUrl: unitDetail?.imageUrl || "",
      // ... other enriched fields
    };
  });
}, [rawComps, metadata]); // Recalculate when either changes
```

---

## Type Definitions

### API Response Types (`types/stats.ts`)

```typescript
export interface Stats {
  playRate: number;
  avgPlace: number;
  top4Rate: number;
  winRate: number;
}

export interface TopComp {
  id: number;
  name: string;
  tier: string;
  coreUnit: Unit[];
  flexUnit: Unit[];
  stats: Stats;
}

export interface TopCompsResponse {
  patch: number;
  topComps: TopComp[];
}
```

### Metadata Types (`types/metadata.ts`)

```typescript
export interface UnitMetadata {
  id: string;
  name: string;
  cost: number;
  traits: string[];
  imageUrl: string;
}

export interface Metadata {
  season: number;
  units: UnitMetadata[];
  traits: TraitMetadata[];
  items: ItemMetadata[];
}
```

---

## Page Components

### Available Pages

| Route           | Component          | Data Source         |
| --------------- | ------------------ | ------------------- |
| `/`             | `TeamCompositions` | `fetchTopComps()`   |
| `/units`        | `Units`            | `fetchUnitStats()`  |
| `/items`        | `Items`            | `fetchItemStats()`  |
| `/traits`       | `Traits`           | `fetchTraitStats()` |
| `/home`         | `Home`             | None                |
| `/team-builder` | `TeamBuilder`      | None                |

### Page Structure Pattern

All data pages follow this structure:

```typescript
export default function PageName() {
  // 1. Get metadata from context
  const { data: metadata } = useMetadata();

  // 2. Local state for page data
  const [rawData, setRawData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Fetch on mount
  useEffect(() => {
    fetchData()
      .then(setRawData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  // 4. Enrich with metadata
  const enrichedData = useMemo(() => {
    // Transform raw + metadata
  }, [rawData, metadata]);

  // 5. Conditional rendering
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Content data={enrichedData} />;
}
```

---

## Layout System

### MainLayout

Provides consistent page structure:

```typescript
const MainLayout = ({ children }) => (
  <div
    className="min-h-screen flex flex-col"
    style={{ backgroundColor: "#F0EAD6" }}
  >
    <Header />
    <main className="flex-1 w-full">{children}</main>
    <Footer />
  </div>
);
```

---

## UI Component Library

### Custom Components (`components/`)

| Component       | Purpose                  |
| --------------- | ------------------------ |
| `TeamCompCard`  | Display team composition |
| `TierSection`   | Group units by tier      |
| `UnitCard`      | Display single unit      |
| `ItemsTable`    | Items statistics table   |
| `TraitsTable`   | Traits statistics table  |
| `FilterSection` | Filtering controls       |
| `ChampionIcon`  | Unit avatar display      |

### Shadcn/Radix Primitives (`components/ui/`)

Pre-built accessible UI components:

- Button, Card, Dialog, Dropdown
- Table, Tabs, Toast
- Form controls, etc.

### Common Components (`components/common/`)

- `Header` - Navigation header
- `Footer` - Page footer

---

## Styling

- **TailwindCSS 4** for utility classes
- **PostCSS** with autoprefixer
- Global styles in `index.css`
- Component styles via Tailwind utilities

---

## Environment Variables

| Variable            | Purpose         | Default                 |
| ------------------- | --------------- | ----------------------- |
| `VITE_API_BASE_URL` | Backend API URL | `http://localhost:3000` |

---

## Development Scripts

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build (tsc + vite build)
npm run preview  # Preview production build
npm run lint     # ESLint
```

---

## Key Characteristics

1. **Single Load Metadata**: Metadata loads once at app start, shared via Context
2. **Page-Level Stats**: Each page fetches its own stats on mount
3. **No Real-Time Updates**: All data is fetched once, no polling
4. **Hard Reload for Retry**: Error recovery via `window.location.reload()`
5. **Enrichment via useMemo**: Raw API data + metadata combined client-side
6. **Typed API Response**: Services validate `{ success, data }` wrapper
7. **camelCase API**: All API responses use camelCase field names

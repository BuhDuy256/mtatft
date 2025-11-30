# Development Log - TFT Stats Application

## [2025-11-30] - Implement Global Metadata Management

**Thời gian:** 2h | **Trạng thái:** ✅ Hoàn thành

### 1. Tính năng mới (What I did)

- [x] Tạo TypeScript interfaces cho metadata (`src/types/metadata.ts`)
- [x] Implement metadata service layer với API call (`src/services/metadata.service.ts`)
- [x] Tạo `MetadataContext` với provider và custom hook (`src/contexts/MetadataContext.tsx`)
- [x] Tích hợp MetadataProvider vào `main.tsx`
- [x] Thêm loading/error screens vào `App.tsx`
- [x] Cấu hình CORS cho Express backend

### 2. Quyết định Kỹ thuật (Key Decisions)

- **Metadata Management Architecture:**

  - _Lựa chọn:_ React Context API thay vì Redux hoặc React Query
  - _Lý do:_ Dữ liệu metadata (Units, Traits, Items) là **static data**, chỉ cần fetch **1 lần duy nhất** khi app khởi động. Context API đủ đơn giản và phù hợp cho use case này. Không cần complexity của Redux store hay caching logic của React Query ở giai đoạn đầu.

- **Blocking Loading Pattern:**

  - _Lựa chọn:_ Chặn render toàn bộ app cho đến khi metadata load xong
  - _Lý do:_ Metadata là **critical data** - app không thể hoạt động nếu không có thông tin về Units/Traits/Items. Thay vì để từng component tự handle loading state, tốt hơn là đảm bảo data sẵn sàng ngay từ đầu.

- **Service Layer Pattern:**

  - _Lựa chọn:_ Tách riêng API logic vào `services/metadata.service.ts`
  - _Lý do:_ Separation of concerns - Context chỉ lo state management, Service lo communication với backend. Dễ test và maintain hơn.

- **Type-only imports:**
  - _Lựa chọn:_ Sử dụng `import type` cho TypeScript interfaces
  - _Lý do:_ Tuân thủ `verbatimModuleSyntax` config, tránh bundle code không cần thiết vào production build.

### 3. Vấn đề & Giải pháp (Challenges & Fixes)

- **Lỗi:** `Access-Control-Allow-Origin` (CORS)

  - _Nguyên nhân:_ Browser chặn request từ Frontend (port 5173) sang Backend (port 3000) vì khác origin.
  - _Giải pháp:_ Thêm `app.use(cors())` vào `server.ts` của Express backend.

- **Lỗi:** TypeScript lint - `'Metadata' is a type and must be imported using a type-only import`
  - _Nguyên nhân:_ TypeScript config bật `verbatimModuleSyntax`, yêu cầu phân biệt type imports và value imports.
  - _Giải pháp:_ Đổi `import { Metadata }` thành `import type { Metadata }` trong `metadata.service.ts` và `MetadataContext.tsx`.

### 4. Bài học rút ra (Learnings)

- Hiểu rõ hơn về **Blocking Loading Pattern** - khi nào nên dùng và khi nào không.
- Nắm được data flow trong React Context: `Service → Context Provider → useContext Hook → Components`.
- TypeScript `import type` giúp optimize bundle size bằng cách loại bỏ type imports ở runtime.
- Loading/Error UI quan trọng không kém business logic - cần thiết kế đẹp và user-friendly.

---

## File Structure Created

```
src/frontend/src/
├── types/
│   └── metadata.ts           # TypeScript interfaces
├── services/
│   └── metadata.service.ts   # API call logic
├── contexts/
│   └── MetadataContext.tsx   # Context provider & hook
├── main.tsx                  # Updated with MetadataProvider
└── App.tsx                   # Updated with loading/error screens
```

## Usage Example

```tsx
import { useMetadata } from "./contexts/MetadataContext";

function MyComponent() {
  const { data, isLoading, error } = useMetadata();

  const units = data?.units || [];
  const traits = data?.traits || [];
  const items = data?.items || [];

  return <div>Season {data?.season}</div>;
}
```

---

## [2025-11-30] - Top Compositions Data Fetching Implementation

**Thời gian:** 3h | **Trạng thái:** ✅ Hoàn thành

### 1. Tính năng mới (What I did)

- [x] Tạo TypeScript interfaces cho stats data (`src/types/stats.ts`)
- [x] Implement stats service layer với API call (`src/services/stats.service.ts`)
- [x] Update `TeamCompositions.tsx` để fetch data từ backend API
- [x] Implement merge logic để enrich API data với metadata
- [x] Thêm loading/error screens cho TeamCompositions page
- [x] Fix API response parsing với `formatResponse` wrapper
- [x] Fix case-insensitive ID matching cho unit lookup

### 2. Quyết định Kỹ thuật (Key Decisions)

- **Data Merging Strategy:**

  - _Lựa chọn:_ Merge data trong component sử dụng `useMemo`
  - _Lý do:_ API trả về `TopComp` data với minimal info (chỉ có unit ID, name). Cần merge với `metadata` để lấy thêm `image_url`, `cost` và tính `borderColor`. `useMemo` đảm bảo merge chỉ chạy lại khi `rawComps` hoặc `metadata` thay đổi, tránh re-calculation không cần thiết.

- **Cost-based Border Colors:**

  - _Lựa chọn:_ Tạo helper function `getCostBorderColor()` để map cost → color
  - _Lý do:_ TFT có quy ước màu border theo cost tier (1-cost: gray, 2-3-cost: blue, 4-cost: purple, 5-cost: gold). Centralize logic này giúp dễ maintain và consistent.

- **API Response Unwrapping:**

  - _Lựa chọn:_ Services unwrap `ApiResponse<T>` wrapper trước khi return data
  - _Lý do:_ Backend dùng `formatResponse()` utility, tất cả responses đều có format `{ success, data, message }`. Services phải extract `data` field trước khi return về component.

- **Case-insensitive ID Matching:**
  - _Lựa chọn:_ Convert cả 2 IDs về lowercase trước khi compare
  - _Lý do:_ Database có thể lưu ID khác case (ví dụ: `TFT15_Rumble` vs `tft15_rumble`). `.toLowerCase()` đảm bảo matching luôn thành công bất kể case.

### 3. Vấn đề & Giải pháp (Challenges & Fixes)

- **Lỗi:** `Cannot read properties of undefined (reading 'length')`

  - _Nguyên nhân:_ `rawComps.length` được gọi khi `rawComps` có thể là `undefined` nếu API response không đúng format.
  - _Giải pháp:_ Thêm null check: `if (!metadata || !rawComps || rawComps.length === 0) return []`

- **Lỗi:** API response parsing sai, data không hiển thị

  - _Nguyên nhân:_ Service expect direct `TopCompsResponse`, nhưng backend wrap trong `{ success, data }` structure.
  - _Giải pháp:_
    ```typescript
    const apiResponse: ApiResponse<TopCompsResponse> = await response.json();
    return apiResponse.data; // Extract data field
    ```

- **Lỗi:** Unit images không hiển thị cho một số champions

  - _Nguyên nhân:_ Metadata có ID `TFT15_Rumble` nhưng API trả về `tft15_rumble` → strict equality check fail.
  - _Giải pháp:_ Case-insensitive matching:
    ```typescript
    metadata.units.find((m) => m.id.toLowerCase() === u.id.toLowerCase());
    ```

- **Lỗi:** Stats fields undefined gây crash khi call `.toFixed()`
  - _Nguyên nhân:_ Optional chaining thiếu khi access nested stats fields.
  - _Giải pháp:_ Use optional chaining + fallback:
    ```typescript
    playRate: comp.stats?.play_rate?.toFixed(1) || "0.0";
    ```

### 4. Bài học rút ra (Learnings)

- **API Response Structure Awareness**: Luôn kiểm tra response structure từ backend. Nếu backend dùng response wrapper utility, frontend phải unwrap đúng cách.
- **Case-sensitivity trong Database**: IDs trong database không đảm bảo consistent case. Nên normalize (lowercase/uppercase) khi compare.
- **Defensive Programming**: Khi map/transform data, luôn handle trường hợp array/object có thể undefined bằng `|| []`, `?.`, và fallback values.
- **useMemo for Performance**: Khi merge/transform large datasets, dùng `useMemo` với proper dependencies để tránh re-calculation mỗi render.

---

## Data Flow Diagram

```
TeamCompositions Component
    │
    ├─► useMetadata() ──► metadata (units, traits, items)
    │
    ├─► useEffect()
    │     └─► fetchTopComps() ──► Backend API
    │           └─► response.data.topComps ──► setRawComps()
    │
    └─► useMemo()
          ├─► rawComps (from API)
          ├─► metadata (from Context)
          └─► Merge Logic
                ├─► Find unit details by ID (case-insensitive)
                ├─► Add image_url, cost, borderColor
                └─► Format stats with .toFixed()
                      │
                      └─► enrichedComps ──► TeamCompCard
```

## Files Modified

```
src/frontend/src/
├── types/
│   └── stats.ts                    # [NEW] Stats interfaces
├── services/
│   ├── stats.service.ts            # [NEW] Fetch top comps API
│   └── metadata.service.ts         # [MODIFIED] Added ApiResponse unwrapping
└── pages/
    └── TeamCompositions.tsx        # [MODIFIED] Data fetching + merge logic
```

---

## [2025-11-30] - Unit Stats Data Fetching Implementation

**Thời gian:** 1.5h | **Trạng thái:** ✅ Hoàn thành

### 1. Tính năng mới (What I did)

- [x] Thêm `fetchUnitStats()` vào `stats.service.ts`
- [x] Update `Units.tsx` để fetch data từ backend API
- [x] Implement merge logic để enrich unit data với metadata
- [x] Group units theo cost tier (1-5) dynamically
- [x] Fix duplicate key error do string ID parsing
- [x] Thêm loading/error screens cho Units page
- [x] Update Unit interfaces trong `TierSection` và `UnitCard` components

### 2. Quyết định Kỹ thuật (Key Decisions)

- **Dynamic Tier Grouping:**

  - _Lựa chọn:_ Group units theo `cost` field từ metadata thay vì hardcoded tiers
  - _Lý do:_ Linh hoạt hơn khi backend data thay đổi. Không cần maintain danh sách units cho từng tier. Code tự động adapt với bất kỳ cost tier nào (1-5).

- **String ID Strategy:**

  - _Lựa chọn:_ Dùng string ID trực tiếp (`unit.id`) thay vì parse sang number
  - _Lý do:_ Backend IDs có format kiểu `"TFT15_Rumble"` (string), không phải số. `parseInt()` sẽ trả về `NaN` → fallback về `0` → duplicate keys. Dùng string ID giữ nguyên uniqueness.

- **Simplified Data Model:**

  - _Lựa chọn:_ Bỏ merge `topItems` metadata
  - _Lý do:_ UI hiện tại không hiển thị top items info, chỉ cần unit stats. Giữ code đơn giản, chỉ merge data thực sự cần thiết.

- **Tier Background Colors:**
  - _Lựa chọn:_ Map cost → color với helper function
  - _Lý do:_ Consistent visual design. Tier 1 (gray), 2 (green), 3 (blue), 4 (pink), 5 (gold) matching TFT conventions.

### 3. Vấn đề & Giải pháp (Challenges & Fixes)

- **Lỗi:** `Encountered two children with the same key, 0`

  - _Nguyên nhân:_ `parseInt(unit.id)` với ID dạng `"TFT15_Rumble"` trả về `NaN`, fallback về `0`. Nhiều units cùng có `id: 0` → duplicate keys.
  - _Giải pháp:_
    ```typescript
    // Before: id: parseInt(unit.id) || 0
    // After:
    id: unit.id; // Keep string format
    ```

- **Lỗi:** TypeScript type mismatch cho `Unit` interface

  - _Nguyên nhân:_ `TierSection` và `UnitCard` có riêng local `Unit` interface với `id: number`, incompatible với string IDs.
  - _Giải pháp:_ Update cả 2 interfaces:
    ```typescript
    interface Unit {
      id: string | number;  // ← Accept both types
      imageUrl?: string;    // ← Add for metadata
      ...
    }
    ```

- **Over-engineering:** Ban đầu merge cả items metadata
  - _Nguyên nhân:_ Nghĩ rằng sẽ cần hiển thị top items trong UI.
  - _Giải pháp:_ Remove items merge logic vì UI không dùng, giảm complexity không cần thiết.

### 4. Bài học rút ra (Learnings)

- **ID Type Awareness**: Backend IDs không phải lúc nào cũng là numbers. Cần check format trước khi parse/convert. String IDs an toàn hơn cho data không rõ structure.
- **YAGNI Principle** (You Aren't Gonna Need It): Đừng implement features chưa cần (như items merge). Giữ code đơn giản, chỉ build những gì thực sự dùng.
- **Dynamic Grouping**: Group by metadata field (cost) linh hoạt hơn hardcoded lists. Scale tốt khi data thay đổi.
- **Interface Consistency**: Khi share data giữa components, dùng consistent interface hoặc shared types thay vì duplicate definitions.

---

## Code Comparison

### Before (Mock Data):

```typescript
const tierData = [
  { tier: 1, name: "Tier 1", units: [hardcoded...] },
  { tier: 2, name: "Tier 2", units: [hardcoded...] },
  ...
];
```

### After (Dynamic):

```typescript
// Fetch from API
const response = await fetchUnitStats();

// Enrich with metadata
const enrichedUnits = response.unitStats.map(unit => ({
  id: unit.id,
  cost: metadata.units.find(m => m.id === unit.id)?.cost
}));

// Group by cost dynamically
const groupedByCost = {};
enrichedUnits.forEach(unit => {
  groupedByCost[unit.cost] = [..., unit];
});
```

## Files Modified

```
src/frontend/src/
├── services/
│   └── stats.service.ts            # [MODIFIED] Added fetchUnitStats()
├── pages/
│   └── Units.tsx                   # [MODIFIED] Data fetching + merge logic
└── components/
    ├── TierSection.tsx             # [MODIFIED] Updated Unit interface
    └── UnitCard.tsx                # [MODIFIED] Updated Unit interface + imageUrl support
```

---

## [2025-11-30] - Items Stats Data Fetching Implementation

**Thời gian:** 1h | **Trạng thái:** ✅ Hoàn thành

### 1. Tính năng mới (What I did)

- [x] Thêm `fetchItemStats()` vào `stats.service.ts`
- [x] Update `Items.tsx` để fetch data từ backend API
- [x] Implement merge logic để enrich item data với **item metadata**
- [x] Implement merge logic để enrich `topUsers` với **unit metadata** (imageUrl only)
- [x] Remove expand button (TrendIcon) từ ItemsTable
- [x] Thêm loading/error screens cho Items page
- [x] Update ItemsTable component để accept items prop dynamically

### 2. Quyết định Kỹ thuật (Key Decisions)

- **Dual Metadata Merge:**

  - _Lựa chọn:_ Merge cả **item metadata** (cho icon) và **unit metadata** (cho topUsers)
  - _Lý do:_ Items có field `topUsers` (top 5 units sử dụng item này). Cần unit metadata để hiển thị avatar của units. ItemsTable component cần cả 2 loại metadata để render đầy đủ.

- **Minimal Unit Metadata:**

  - _Lựa chọn:_ Chỉ merge `imageUrl` từ unit metadata cho topUsers, không merge các field khác
  - _Lý do:_ UI chỉ hiển thị avatar images của units trong topUsers. Name và stats không cần thiết → giữ code đơn giản, chỉ merge field thực sự dùng.

- **Remove Expand Button:**

  - _Lựa chọn:_ Bỏ TrendIcon button (expand) từ cuối mỗi row trong ItemsTable
  - _Lý do:_ UI hiện tại chỉ hiển thị stats, không có nội dung mở rộng. Button không có function → remove để UI clean hơn.

- **Complete Component Rewrite:**
  - _Lựa chọn:_ Overwrite toàn bộ `ItemsTable.tsx` thay vì edit từng phần
  - _Lý do:_ File có nhiều hardcoded data và unused imports. Rewrite clean hơn là patch nhiều lần, tránh file corruption.

### 3. Vấn đề & Giải pháp (Challenges & Fixes)

- **File Corruption During Edits:**

  - _Nguyên nhân:_ Multi-edit operations trên file lớn với nhiều hardcoded data → duplicate code, leftover fragments.
  - _Giải pháp:_
    ```typescript
    // Instead of multiple replace operations:
    // Strategy: Completely overwrite file with clean implementation
    write_to_file({
      TargetFile: "ItemsTable.tsx",
      Overwrite: true,
      CodeContent: "// Clean component from scratch",
    });
    ```

- **Two-Level Metadata Lookup:**

  - _Vấn đề:_ Cần merge 2 loại metadata khác nhau (items + units) trong cùng một enrichment flow.
  - _Giải pháp:_ Nested map operations:
    ```typescript
    const enrichedItems = rawItems.map((item) => {
      // 1. Item metadata
      const itemDetail = metadata.items.find(...);

      // 2. Unit metadata for each topUser
      const enrichedTopUsers = item.topUsers.map((user) => {
        const userDetail = metadata.units.find(...);
        return { id, name, imageUrl: userDetail?.image_url };
      });

      return { ...item, icon: itemDetail?.image_url, topUsers: enrichedTopUsers };
    });
    ```

- **Unused Image Imports Cleanup:**
  - _Nguyên nhân:_ ItemsTable component có rất nhiều hardcoded image imports không còn dùng nữa.
  - _Giải pháp:_ Remove tất cả hardcoded imports, chỉ giữ fallback image. Component bây giờ dùng dynamic images từ metadata.

### 4. Bài học rút ra (Learnings)

- **Dual Metadata Sources**: Một component có thể cần merge nhiều loại metadata khác nhau. Design data flow rõ ràng: Item → Item metadata, TopUsers → Unit metadata.
- **Selective Field Merge**: Không cần merge toàn bộ metadata object. Chỉ pick fields thực sự dùng trong UI (ví dụ: chỉ `imageUrl`, không cần `cost`, `traits`).
- **Component Cleanup Strategy**: Đôi khi rewrite toàn bộ file clean hơn là patch nhiều lần, đặc biệt với component có nhiều hardcoded data.
- **Visual UI Elements**: Remove UI elements không có function (như expand button không expand gì) để UI focus vào data thật.

---

## Code Comparison

### Before (Mock Data):

```typescript
const itemsData = [
  {
    id: 1,
    name: "Gargoyle Ston...",
    icon: "https://images.unsplash.com/...",
    playRate: "4.22/8",
    topUsers: [1, 2, 3, 4, 5], // ← Just numbers
  },
  // ... hardcoded items
];
```

### After (Dynamic with Dual Metadata):

```typescript
// Fetch from API
const response = await fetchItemStats();

// Enrich with ITEM metadata
const itemDetail = metadata.items.find(...)
const icon = itemDetail?.image_url;

// Enrich topUsers with UNIT metadata
const enrichedTopUsers = item.topUsers.map((user) => {
  const userDetail = metadata.units.find(...);
  return {
    id: user.id,
    name: userDetail?.name,
    imageUrl: userDetail?.image_url  // ← Only field needed for UI
  };
});
```

## Files Modified

```
src/frontend/src/
├── services/
│   └── stats.service.ts            # [MODIFIED] Added fetchItemStats()
├── pages/
│   └── Items.tsx                   # [MODIFIED] Data fetching + dual metadata merge
└── components/
    └── ItemsTable.tsx              # [REWRITTEN] Clean component, removed TrendIcon, accepts items prop
```

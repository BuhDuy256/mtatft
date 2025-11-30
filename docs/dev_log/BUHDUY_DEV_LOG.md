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

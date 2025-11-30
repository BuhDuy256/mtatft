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

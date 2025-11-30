## [YYYY-MM-DD] - [Tên Tóm Tắt Công Việc]

**Thời gian:** 4h | **Trạng thái:** ✅ Hoàn thành / 🚧 Đang làm

### 1. Tính năng mới (What I did)

- [x] Tạo cấu trúc folder `src/contexts` và `src/services`.
- [x] Implement `MetadataContext` để fetch dữ liệu Tướng/Item.
- [x] Setup Express Backend cơ bản.

### 2. Quyết định Kỹ thuật (Key Decisions)

- **Metadata Management:**
  - _Lựa chọn:_ React Context API.
  - _Lý do:_ Dữ liệu metadata là tĩnh (static), cần load 1 lần duy nhất khi init app và chặn render cho đến khi load xong. Context phù hợp hơn Redux/React Query ở giai đoạn này vì cấu trúc đơn giản.
- **Backend Communication:**
  - _Lựa chọn:_ Cài package `cors` cho Express.
  - _Lý do:_ Giải quyết nhanh lỗi chặn truy cập từ localhost:5173.

### 3. Vấn đề & Giải pháp (Challenges & Fixes)

- **Lỗi:** `Access-Control-Allow-Origin` (CORS).
  - _Nguyên nhân:_ Browser chặn request từ Frontend (port 5173) sang Backend (port 3000).
  - _Giải pháp:_ Thêm `app.use(cors())` vào `index.ts` của server.
- **Lỗi:** Typescript báo thiếu type cho `cors`.
  - _Giải pháp:_ `npm install -D @types/cors`.

### 4. Bài học rút ra (Learnings)

- Hiểu rõ hơn về mô hình "Blocking Loading" bằng Context.
- Nắm được flow: Service -> Context -> Component.

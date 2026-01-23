// src/data/mockData.ts
// Sửa lỗi TS1484: Thêm từ khóa 'type'
// Sửa lỗi TS6133: Bỏ PostSummary vì không dùng trong file này
import type { PostDetail } from "../types/blog";

// Sử dụng PostDetail[] để chứa trọn vẹn trường 'content' cho Workshop
export const MOCK_POSTS: PostDetail[] = [
  {
    id: 3,
    title: "Workshop: Làm chủ Asynchronous Programming trong .NET 8 API",
    slug: "workshop-asynchronous-dotnet-8",
    summary:
      "Tài liệu hướng dẫn workshop 60 phút: Từ lý thuyết Thread Pool đến thực hành tối ưu hóa High-Performance Web API.",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    categoryName: "Workshop",
    createdAt: "2026-01-23T08:00:00Z",
    tags: ["DotNet8", "Async", "Performance"],
    content: `
        <div class="workshop-outline">
          <h2 class="text-purple-600 font-bold text-2xl mb-4">Mục tiêu buổi Workshop (60 Phút)</h2>
          <ul class="space-y-2 list-disc pl-5 mb-6 text-slate-300">
            <li>Hiểu rõ cơ chế Thread Pool Starvation và tác động đến Web Server.</li>
            <li>Phân biệt rạch ròi giữa I/O Bound (Database, API Call) và CPU Bound.</li>
            <li>Demo thực tế: Cách tăng gấp 10 lần khả năng chịu tải mà không tốn thêm tài nguyên.</li>
          </ul>

          <h2 class="text-xl font-bold mt-8 mb-3">Phần 1: Lý thuyết (15 phút)</h2>
          <p className="mb-4">Tại sao <code>Task.Wait()</code> hay <code>.Result</code> là kẻ thù của hiệu suất? Chúng ta sẽ tìm hiểu về <strong>State Machine</strong> mà Compiler tạo ra khi chuyển đổi từ code đồng bộ sang bất đồng bộ.</p>
          
          <h2 class="text-xl font-bold mt-8 mb-3">Phần 2: Demo Thực hành (30 phút)</h2>
          <p className="mb-4">Cấu trúc một Controller chuẩn .NET 8 với Non-blocking I/O giúp giải phóng luồng xử lý ngay lập tức:</p>
          <pre class="bg-slate-950 text-emerald-400 p-6 rounded-2xl border border-slate-800 my-4 font-mono text-sm overflow-x-auto">
// Good Practice: Non-blocking I/O
[HttpGet("data")]
public async Task&lt;IActionResult&gt; GetAsync() {
    // Tránh dùng Task.Result ở đây
    var data = await _service.CallExternalApiAsync();
    return Ok(data);
}</pre>

          <h2 class="text-xl font-bold mt-8 mb-3">Phần 3: Q&A và Lab (15 phút)</h2>
          <p>Thực hành sửa lỗi Deadlock phổ biến trong các dự án Legacy và học cách sử dụng <code>Task.WhenAll</code> để tối ưu hóa thời gian phản hồi cho các yêu cầu song song.</p>
        </div>
      `,
  },
  {
    id: 1,
    title: "Hướng dẫn xây dựng Blog với .NET 8 và React",
    slug: "huong-dan-xay-dung-blog-net-8-react",
    summary:
      "Tìm hiểu cách kết hợp sức mạnh của .NET Web API và sự linh hoạt của React để tạo ra một trang blog cá nhân.",
    thumbnail: "https://picsum.photos/seed/post1/600/400",
    categoryName: "Lập trình .NET",
    createdAt: "2024-03-20T08:30:00Z",
    tags: ["C#", "React", "WebAPI"],
    content: `
      <div class="prose dark:prose-invert">
        <h2 class="text-2xl font-bold">Lộ trình xây dựng hệ thống</h2>
        <p>Bắt đầu từ việc thiết kế Database với Entity Framework Core, sau đó viết các API chuẩn RESTful và cuối cùng là tích hợp với React sử dụng Tailwind CSS cho giao diện.</p>
        <p>Đây là nội dung đầy đủ được thiết kế để hiển thị trong trang chi tiết bài viết.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Tối ưu hiệu năng ứng dụng Frontend",
    slug: "toi-uu-hieu-nang-frontend",
    summary:
      "Các kỹ thuật Lazy Loading, Caching và tối ưu hóa hình ảnh giúp website của bạn chạy nhanh như chớp.",
    thumbnail: "https://picsum.photos/seed/post2/600/400",
    categoryName: "Frontend",
    createdAt: "2024-03-21T10:15:00Z",
    tags: ["Performance", "Web", "Javascript"],
    content: `
      <div class="prose dark:prose-invert">
        <h2 class="text-2xl font-bold">Kỹ thuật Web Vitals</h2>
        <p>Tập trung vào LCP (Largest Contentful Paint) và CLS (Cumulative Layout Shift) để cải thiện điểm số SEO và trải nghiệm người dùng.</p>
      </div>
    `,
  },
];

import type { PostSummary, PostDetail } from "../types/blog";

export const MOCK_POSTS_SUMMARY: PostSummary[] = [
  {
    id: 3, // Bài viết .NET 8 lên đầu
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
          <h2 class="text-purple-600">Mục tiêu buổi Workshop (60 Phút)</h2>
          <ul class="list-disc pl-5">
            <li>Hiểu rõ cơ chế Thread Pool Starvation.</li>
            <li>Phân biệt I/O Bound và CPU Bound.</li>
            <li>Demo thực tế: Tăng gấp 10 lần khả năng chịu tải của API.</li>
          </ul>

          <h2 class="mt-8">Phần 1: Lý thuyết (15 phút)</h2>
          <p>Tại sao <code>Task.Wait()</code> hay <code>.Result</code> là kẻ thù của hiệu suất? Chúng ta sẽ tìm hiểu về <strong>State Machine</strong> mà Compiler tạo ra khi dùng <code>async/await</code>.</p>
          
          <h2 class="mt-8">Phần 2: Demo Thực hành (30 phút)</h2>
          <p>Cấu trúc một Controller chuẩn .NET 8 với Non-blocking I/O:</p>
          <pre class="bg-zinc-900 text-green-400 p-4 rounded-lg">
// Good Practice: Non-blocking
[HttpGet("data")]
public async Task<IActionResult> GetAsync() {
    var data = await _service.CallExternalApiAsync();
    return Ok(data);
}</pre>

          <h2 class="mt-8">Phần 3: Q&A và Lab (15 phút)</h2>
          <p>Thực hành sửa lỗi Deadlock trong legacy code và tối ưu hóa <code>Task.WhenAll</code> cho các request song song.</p>
        </div>
      `,
  },
  {
    id: 1,
    title: "Hướng dẫn xây dựng Blog với .NET 8 và React",
    summary:
      "Tìm hiểu cách kết hợp sức mạnh của .NET Web API và sự linh hoạt của React để tạo ra một trang blog cá nhân.",
    slug: "huong-dan-xay-dung-blog-net-8-react",
    thumbnail: "https://picsum.photos/seed/post1/600/400",
    categoryName: "Lập trình .NET",
    createdAt: "2024-03-20T08:30:00Z",
    tags: ["C#", "React", "WebAPI"],
  },
  {
    id: 2,
    title: "Tối ưu hiệu năng ứng dụng Frontend",
    summary:
      "Các kỹ thuật Lazy Loading, Caching và tối ưu hóa hình ảnh giúp website của bạn chạy nhanh như chớp.",
    slug: "toi-uu-hieu-nang-frontend",
    thumbnail: "https://picsum.photos/seed/post2/600/400",
    categoryName: "Frontend",
    createdAt: "2024-03-21T10:15:00Z",
    tags: ["Performance", "Web", "Javascript"],
  },
];

export const MOCK_POST_DETAIL: PostDetail = {
  id: 1,
  title: "Hướng dẫn xây dựng Blog với .NET 8 và React",
  content:
    "<h2>Chào mừng đến với nhatdev.top</h2><p>Đây là nội dung chi tiết của bài viết được viết bằng HTML từ backend trả về...</p>",
  slug: "huong-dan-xay-dung-blog-net-8-react",
  thumbnail: "https://picsum.photos/seed/post1/1200/600",
  categoryName: "Lập trình .NET",
  tags: ["C#", "React", "WebAPI"],
  createdAt: "2024-03-20T08:30:00Z",
  updatedAt: "2024-03-20T14:00:00Z",
};

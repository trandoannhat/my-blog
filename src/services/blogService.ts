// src/services/blogService.ts
import { MOCK_POSTS } from "../data/mockData";
// Sửa lỗi TS1484: Đảm bảo sử dụng 'import type' cho các định nghĩa kiểu
import type { PostSummary, PostDetail } from "../types/blog";

// Lấy danh sách bài viết (Chỉ trả về thông tin tóm tắt)
export const getPosts = async (): Promise<PostSummary[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Trả về mảng dưới dạng PostSummary (ẩn content để tối ưu)
  return MOCK_POSTS as PostSummary[];
};

// Lấy chi tiết bài viết theo Slug
export const getPostDetail = async (
  slug: string,
): Promise<PostDetail | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Tìm kiếm linh hoạt trong mảng dữ liệu gốc
  const post = MOCK_POSTS.find((p) => p.slug === slug);

  if (!post) {
    console.warn(`Không tìm thấy bài viết với slug: ${slug}`);
    return null;
  }

  return post;
};

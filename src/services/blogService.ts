import { MOCK_POSTS_SUMMARY, MOCK_POST_DETAIL } from "../data/mockData";
import type { PostSummary, PostDetail } from "../types/blog";

// Lấy danh sách bài viết
export const getPosts = async (): Promise<PostSummary[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_POSTS_SUMMARY;
};

// Lấy chi tiết bài viết theo Slug
export const getPostDetail = async (
  slug: string,
): Promise<PostDetail | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Sử dụng biến slug để tìm bài viết (Giả lập logic Backend)
  // Nếu slug truyền vào khớp với slug trong Mock Data thì trả về bài viết đó
  if (MOCK_POST_DETAIL.slug === slug) {
    return MOCK_POST_DETAIL;
  }

  // Nếu không tìm thấy (ví dụ slug sai), trả về null
  console.warn(`Không tìm thấy bài viết với slug: ${slug}`);
  return null;
};

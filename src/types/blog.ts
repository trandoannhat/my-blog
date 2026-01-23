// DTOs tương ứng với Backend
export interface PostSummary {
  id: number;
  title: string;
  summary?: string;
  slug: string;
  thumbnail?: string;
  categoryName: string;
  createdAt: string; // ISO Date string
  tags: string[];
}
// PostDetail sẽ lấy toàn bộ PostSummary và thêm 2 trường mới
export interface PostDetail extends PostSummary {
  content: string;
  updatedAt?: string;
}
export interface PostDetail {
  id: number;
  title: string;
  content: string;
  slug: string;
  thumbnail?: string;
  categoryName: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
}

// Entity cho các phần khác
export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Comment {
  id: number;
  content: string;
  username: string;
  createdAt: string;
  replies?: Comment[];
}

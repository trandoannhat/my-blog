import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getPosts } from "../../services/blogService";
import type { PostSummary } from "../../types/blog";
import { Search, Inbox } from "lucide-react";

const PostList = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryUrl = queryParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(queryUrl);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setSearchTerm(queryUrl);
  }, [queryUrl]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] transition-colors duration-500 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Header & Search Bar Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
              {searchTerm ? (
                <span>
                  Kết quả cho:{" "}
                  <span className="text-purple-600">"{searchTerm}"</span>
                </span>
              ) : (
                "Thư viện bài viết"
              )}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
              Khám phá kiến thức, tài liệu kỹ thuật và các buổi Workshop thực
              chiến.
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm tên bài viết, tag, danh mục..."
              value={searchTerm}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white shadow-sm focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all placeholder:text-slate-400 font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-[420px] bg-white dark:bg-slate-900/40 animate-pulse rounded-[2.5rem] border border-slate-200 dark:border-slate-800"
                  />
                ))
            : filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)] hover:-translate-y-2 transition-all duration-500"
                >
                  <Link
                    to={`/post/${post.slug}`}
                    className="flex flex-col h-full"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-black rounded-lg shadow-sm">
                          {post.categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors line-clamp-2 tracking-tight leading-tight">
                        {post.title}
                      </h2>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800/50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          {new Date(post.createdAt).toLocaleDateString(
                            "vi-VN",
                            { month: "short", day: "numeric", year: "numeric" },
                          )}
                        </span>
                        <span className="text-purple-600 dark:text-purple-400 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Đọc ngay →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
        </div>

        {/* Empty State */}
        {!loading && filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-3xl flex items-center justify-center text-slate-400 mb-6">
              <Inbox size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Không tìm thấy kết quả
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Thử tìm kiếm với từ khóa khác hoặc kiểm tra lại chính tả nhé.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-8 text-purple-600 font-bold hover:underline"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;

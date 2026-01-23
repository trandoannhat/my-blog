import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/blogService";
import type { PostSummary } from "../types/blog";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      const sorted = [...data].sort((a, b) =>
        a.id === 3 ? -1 : b.id === 3 ? 1 : 0,
      );
      setPosts(sorted);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto p-[20px] md:px-20 py-16">
        {/* Header Section - Chỉnh lại theo style cá nhân chuyên nghiệp */}
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-black tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for projects
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.9]">
              Building products,
              <br />
              <span className="text-purple-600">sharing knowledge.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Xin chào, tôi là một Full-stack Developer. Đây là nơi tôi lưu trữ
              hành trình lập trình, những giải pháp kỹ thuật thực chiến và những
              bài học rút ra từ quá trình xây dựng sản phẩm.
            </p>
          </div>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[450px] bg-white dark:bg-slate-900/50 animate-pulse rounded-[2.5rem]"
                />
              ))
            : posts.map((post, index) => {
                const isFeatured = index === 0;
                return (
                  <article
                    key={post.id}
                    className={`group flex flex-col border rounded-[2.5rem] overflow-hidden transition-all duration-500 
                      border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 
                      hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)] hover:-translate-y-2
                      ${isFeatured ? "md:col-span-2 lg:col-span-3 lg:flex-row lg:h-[480px]" : "h-full"}`}
                  >
                    {/* Thumbnail */}
                    <Link
                      to={`/post/${post.slug}`}
                      className={`block overflow-hidden ${isFeatured ? "lg:w-3/5 h-72 lg:h-full" : "aspect-[16/10] w-full"}`}
                    >
                      <img
                        src={post.thumbnail}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>

                    {/* Content Card */}
                    <div
                      className={`p-10 flex flex-col flex-1 ${isFeatured ? "lg:w-2/5 justify-center" : ""}`}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-purple-600 text-white text-[10px] font-black rounded-lg uppercase tracking-widest">
                          {isFeatured ? "🔥 Workshop" : post.categoryName}
                        </span>
                        <span className="text-xs text-slate-400 font-bold">
                          {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                        </span>
                      </div>

                      <Link to={`/post/${post.slug}`}>
                        <h3
                          className={`font-black text-slate-900 dark:text-white mb-6 group-hover:text-purple-600 transition-colors
                          ${isFeatured ? "text-3xl md:text-5xl tracking-tighter" : "text-2xl line-clamp-2"}`}
                        >
                          {post.title}
                        </h3>
                      </Link>

                      <p
                        className={`text-slate-600 dark:text-slate-400 leading-relaxed mb-10 ${isFeatured ? "text-lg line-clamp-3" : "text-sm line-clamp-3"}`}
                      >
                        {post.summary}
                      </p>

                      <Link
                        to={`/post/${post.slug}`}
                        className={`mt-auto font-black flex items-center gap-2 group/link ${isFeatured ? "text-purple-600 text-xl" : "text-slate-900 dark:text-white"}`}
                      >
                        {isFeatured ? "Tham gia Workshop ngay" : "Xem chi tiết"}
                        <span className="transition-transform group-hover/link:translate-x-2">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default Home;

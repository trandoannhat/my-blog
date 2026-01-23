import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/blogService";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPosts().then((data) => {
      setPost(data.find((p) => p.slug === slug));
      setLoading(false);
    });
  }, [slug]);

  if (loading || !post)
    return <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a]" />;

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-[#0f172a] transition-colors duration-500 pb-24 relative">
      <div
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 z-[110]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Header */}
      <div className="w-full h-[50vh] md:h-[65vh] relative">
        <img src={post.thumbnail} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0f172a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
          <div className="max-w-5xl mx-auto w-full">
            <button
              onClick={() => navigate(-1)}
              className="text-white/80 hover:text-white flex items-center gap-2 mb-8 font-bold"
            >
              <ArrowLeft size={20} /> Quay lại
            </button>
            <span className="px-4 py-2 bg-purple-600 text-white text-xs font-black rounded-lg uppercase tracking-widest shadow-xl">
              {post.categoryName}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mt-6 tracking-tighter leading-[1.1]">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="hidden lg:flex lg:col-span-1 flex-col gap-6 sticky top-24 h-fit">
          <button className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-purple-600 shadow-xl transition-all">
            <Bookmark />
          </button>
          <button className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-purple-600 shadow-xl transition-all">
            <Share2 />
          </button>
        </aside>

        <div className="lg:col-span-11 bg-white dark:bg-slate-900/60 p-8 md:p-16 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <div className="flex gap-8 text-slate-500 dark:text-slate-400 mb-12 font-bold text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={18} />{" "}
              {new Date(post.createdAt).toLocaleDateString("vi-VN")}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} /> 60 phút Workshop
            </span>
          </div>

          <div
            className="prose prose-slate prose-xl max-w-none dark:prose-invert
              text-slate-700 dark:text-slate-300 font-sans leading-relaxed
              prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-black
              prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800/50 prose-code:p-1 prose-code:rounded
              prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-2xl
              prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:font-black
              prose-img:rounded-[2.5rem] prose-img:shadow-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
};
export default PostDetail;

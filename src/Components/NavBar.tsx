// src/Components/layout/NavBar.tsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Search, UserCircle } from "lucide-react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkTheme =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/posts?q=${encodeURIComponent(keyword.trim())}`);
      setKeyword("");
      setToggle(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-500">
      <div className="max-w-7xl mx-auto h-16 px-6 md:px-10 lg:px-20 flex justify-between items-center gap-6">
        {/* LOGO - Thu nhỏ icon một chút (w-9 h-9) */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
          <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md shadow-purple-500/20 group-hover:rotate-6 transition-transform">
            T
          </div>
          <span className="text-lg font-black text-slate-900 dark:text-white tracking-tighter hidden sm:inline">
            tdn<span className="text-purple-600">dev</span>
          </span>
        </Link>

        {/* SEARCH BOX - Giảm padding py-2 */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-sm relative group"
        >
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
            size={16}
          />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full pl-10 pr-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-4 ring-purple-500/10 focus:border-purple-500 outline-none transition-all text-xs font-medium"
          />
        </form>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <Link
                to="/"
                className={`text-xs font-bold tracking-wide transition-colors ${isActive("/") ? "text-purple-600" : "text-slate-600 dark:text-slate-400 hover:text-purple-600"}`}
              >
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className={`text-xs font-bold tracking-wide transition-colors ${isActive("/posts") ? "text-purple-600" : "text-slate-600 dark:text-slate-400 hover:text-purple-600"}`}
              >
                BÀI VIẾT
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            {/* Theme Toggle - Gọn hơn */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block"></div>

            {/* NÚT ĐĂNG NHẬP - Đã chỉnh nhỏ lại (px-4 py-1.5, text-xs) */}
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 shadow-md shadow-purple-500/10 active:scale-95 transition-all"
            >
              <UserCircle size={16} /> ĐĂNG NHẬP
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-900 dark:text-white"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${toggle ? "max-h-96" : "max-h-0"}`}
      >
        <div className="p-4 flex flex-col gap-4">
          <form onSubmit={handleSearch} className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none text-sm"
            />
          </form>
          <div className="flex flex-col text-sm">
            <Link
              to="/"
              onClick={() => setToggle(false)}
              className="py-3 px-2 font-bold text-slate-600 dark:text-slate-400"
            >
              TRANG CHỦ
            </Link>
            <Link
              to="/posts"
              onClick={() => setToggle(false)}
              className="py-3 px-2 font-bold text-slate-600 dark:text-slate-400"
            >
              BÀI VIẾT
            </Link>
            <Link
              to="/login"
              onClick={() => setToggle(false)}
              className="mt-2 py-3 bg-purple-600 text-white rounded-xl font-black text-center text-xs"
            >
              ĐĂNG NHẬP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

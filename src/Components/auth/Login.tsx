// src/Components/auth/Login.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Github, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center p-6 font-sans transition-colors duration-500 pt-32">
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-500/30 mb-4 font-black text-2xl">
            W
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
            Chào mừng trở lại!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Đăng nhập để tiếp tục học Workshop cùng Team.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1 cursor-default">
                Email của bạn
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1 cursor-default">
                Mật khẩu
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-bold text-purple-600 hover:text-purple-500"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2 group">
              Đăng nhập{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          <div className="relative my-8 text-center">
            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-200 dark:bg-slate-800"></span>
            <span className="relative bg-white dark:bg-slate-900 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest cursor-default">
              Hoặc
            </span>
          </div>

          <button className="w-full py-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
            <Github size={20} /> Github Account
          </button>
        </div>

        <p className="text-center mt-8 text-slate-600 dark:text-slate-400 font-medium">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="text-purple-600 font-black hover:underline"
          >
            Tham gia ngay
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;

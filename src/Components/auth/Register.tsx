// src/Components/auth/Register.tsx
import { Link } from "react-router-dom";
import { Mail, Lock, User, UserPlus, CheckCircle2 } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center p-6 font-sans transition-colors duration-500">
      <div className="w-full max-w-[520px]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-500/30 mb-4">
            <UserPlus size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
            Tạo tài khoản mới
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Bắt đầu hành trình chinh phục .NET cùng chúng mình.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                Họ và tên
              </label>
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                Email làm việc
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="dev@workshop.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                Mật khẩu
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="Tối thiểu 8 ký tự"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all font-medium"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 p-1">
              <div className="mt-1">
                <CheckCircle2 size={16} className="text-green-500" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Tôi đồng ý với các Điều khoản dịch vụ và Chính sách bảo mật của
                Dev Workshop.
              </p>
            </div>

            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl shadow-lg shadow-purple-500/25 transition-all mt-4">
              Đăng ký tài khoản
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-slate-600 dark:text-slate-400 font-medium">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-black hover:underline"
          >
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

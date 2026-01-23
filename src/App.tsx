import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home } from "./Components";
import Footer from "./Components/Footer";
import PostDetail from "./Components/posts/PostDetail"; // Import đúng đường dẫn bạn đã lưu
import PostList from "./Components/posts/PostList";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

const MainLanding = () => (
  // Nền xám nhạt (zinc-100) để các card bài viết màu trắng nổi lên
  <div className="bg-zinc-100 dark:bg-[#0b0b0b] transition-colors duration-300">
    <section id="home">
      <Home />
    </section>
  </div>
);

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Kiểm tra ưu tiên: 1. LocalStorage, 2. Hệ thống máy tính
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Router>
      {/* Container chính: Đảm bảo phủ kín chiều cao màn hình */}
      <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-[#0b0b0b] transition-colors duration-300">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainLanding />} />
            {/* Đăng ký trang danh sách bài viết */}
            <Route path="/posts" element={<PostList />} />
            {/* ĐĂNG KÝ TRANG CHI TIẾT BÀI VIẾT TẠI ĐÂY */}
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

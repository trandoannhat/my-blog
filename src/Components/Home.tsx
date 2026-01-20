import { useEffect, useState } from "react"; // Thêm dòng này
import { AppText } from "../Constants";
import { homeImage } from "../assets";
import Typewriter from "typewriter-effect";
import axios from "axios"; // Thêm dòng này

const Home: React.FC = () => {
  // 1. Tạo state để lưu danh sách bài viết
  const [posts, setPosts] = useState<any[]>([]);

  // 2. Gọi API khi trang web vừa load
  useEffect(() => {
    axios
      .get("https://api.nhatdev.top/api/Post")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error("Lỗi lấy bài viết:", err));
  }, []);

  return (
    <div className="flex flex-col">
      {/* PHẦN GIỚI THIỆU CỦA BẠN (GIỮ NGUYÊN) */}
      <div className="flex p-[20px] md:px-20 justify-between flex-col md:flex-row">
        <div className="flex w-full flex-row justify-end">
          <div className="flex w-full flex-col items-start">
            <h1 className="text-[35px] md:text-[40px] font-bold">
              {AppText.hello}
            </h1>

            <div className="flex items-center flex-wrap">
              <h1 className="text-[35px] md:text-[40px] font-bold mr-3">
                {AppText.Iam}
              </h1>

              <div className="text-[35px] md:text-[40px] font-bold text-purple-600">
                <Typewriter
                  options={{
                    strings: [
                      AppText.TdnDev,
                      AppText.SoftwareEngineer,
                      AppText.BackendDeveloper,
                      AppText.FrontendDeveloper,
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <p className="my-5 text-gray-400 max-w-[520px] leading-relaxed">
              {AppText.aboutMeDescripion}
            </p>

            <button className="hover:z-50 transition-all duration-300 ease-in-out hover:scale-110 bg-purple-600 px-6 py-2 rounded-md text-white">
              Tải CV
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center mt-10 md:mt-0">
          <img
            src={homeImage}
            alt="tdn dev"
            className="w-[200px] md:w-[300px]"
          />
        </div>
      </div>

      {/* --- PHẦN BÀI VIẾT MỚI (PHẦN KẾT NỐI VỚI ADMIN) --- */}
      <div className="p-[20px] md:px-20 mt-10">
        <h2 className="text-[30px] font-bold mb-5">Bài viết mới nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 border rounded-lg hover:shadow-lg transition-all border-gray-700 bg-[#1e1e1e]"
            >
              <h3 className="text-purple-500 font-bold text-[20px] mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 line-clamp-3 text-[14px]">
                {post.content}
              </p>
              <button className="mt-4 text-purple-400 text-[14px] font-medium">
                Đọc thêm...
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { skill } from "../assets";
import { AppText, skillsList, workDetail } from "../Constants";

const Skills = () => {
  return (
    <div
      className="mt-10 py-10 bg-white dark:bg-[#0b0b0b] transition-colors duration-300"
      id="skills"
    >
      {/* Tiêu đề phần Skills */}
      <div className="flex flex-row justify-center items-center gap-3">
        <img
          src={skill}
          className="w-[50px] md:w-[70px] hover:animate-bounce"
          alt="skill icon"
        />
        <h1 className="text-[30px] md:text-[40px] font-bold text-zinc-900 dark:text-white">
          {AppText.Skills}
          <span className="text-purple-600 ml-2">{AppText.Experties}</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly px-8 md:px-20 mt-12 gap-10">
        {/* Cột bên trái: Danh sách Icon Kỹ năng */}
        <div className="grid grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {skillsList.map((item, index) => (
            <div
              key={`skill-${index}`} // Sửa lỗi unique key bằng cách thêm key ở đây
              className="w-[60px] h-[60px] transition ease-in-out delay-100 hover:scale-125 
                         bg-purple-50 dark:bg-zinc-900 
                         p-3 rounded-full flex items-center justify-center
                         border border-transparent dark:border-zinc-800 shadow-sm"
              title={""} // Hiện tên kỹ năng khi hover (nếu item có name)
            >
              <img
                src={item.icon}
                className="w-[40px] object-contain"
                alt="icon"
              />
            </div>
          ))}
        </div>

        {/* Cột bên phải: Chi tiết kinh nghiệm làm việc */}
        <div className="flex flex-col justify-start">
          {workDetail.map((item, index) => (
            <div
              key={`work-${index}`} // Sửa lỗi unique key ở đây
              className="flex flex-row mb-8 group"
            >
              <div className="mr-10 font-bold text-zinc-900 dark:text-purple-400 min-w-[60px]">
                <h2 className="text-lg">{item.year}</h2>
              </div>

              <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 group-hover:border-purple-500 transition-colors">
                {/* Dấu chấm tròn ở mốc thời gian */}
                <div className="absolute w-3 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-full -left-[7.5px] top-2 group-hover:bg-purple-500 transition-colors"></div>

                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                  {item.position}
                </h3>
                <h3 className="font-medium text-[15px] text-gray-500 dark:text-zinc-400 mt-1">
                  {item.compnayName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

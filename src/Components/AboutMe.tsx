import { laptop, wave } from "../assets";
import { aboutSection, AppText } from "../Constants";

const AboutMe: React.FC = () => {
  return (
    <div id="aboutme" className="mt-[100px] relative">
      <img src={wave} className="w-screen absolute top-0 left-0" />

      {/* Header section */}
      <div className="w-full bg-purple-600 h-[300px] flex flex-col justify-center items-center relative">
        <div className="absolute left-10 -top-24">
          <img src={laptop} className="w-[150px] md:w-[300px]" />
        </div>

        <h1 className="text-white text-[45px] md:text-[50px] font-bold text-center">
          Về <span className="text-black">tdn dev</span>
        </h1>

        <p className="w-full px-10 md:px-48 lg:px-80 mt-6 text-white text-center leading-relaxed">
          {AppText.aboutMeDescripion}
        </p>
      </div>

      {/* About cards */}
      <div className="flex flex-col md:flex-row -mt-[75px] md:px-32 relative z-10">
        {aboutSection.map((item) => (
          <div
            key={item.id}
            className="flex relative w-full items-center justify-center flex-col m-2
              group md:hover:bg-purple-600 rounded-lg py-4 transition-all"
          >
            <img
              src={item.image}
              className="w-[230px] rounded-lg h-[170px] object-cover"
              alt={item.title}
            />
            <h1 className="font-bold mt-2 md:group-hover:text-white">
              {item.title}
            </h1>
            <p className="text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7 text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

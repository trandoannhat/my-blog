import { AppText } from "../Constants";
import { homeImage } from "../assets";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
  return (
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
        <img src={homeImage} alt="tdn dev" className="w-[200px] md:w-[300px]" />
      </div>
    </div>
  );
};

export default Home;

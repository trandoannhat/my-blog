import { useEffect, useState } from "react";
import { AppText, portfolio } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { robo } from "../assets";

type PortfolioItem = {
  id: number;
  title: string;
  type: string;
  desc: string;
  imageUrl: string;
};

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type: string) => {
    if (type === "all") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
    }
  };

  return (
    <div id="portfolio" className="mt-10 flex justify-center flex-col">
      <div className="flex flex-row px-6 md:px-0 items-center justify-center">
        <SectionHeading
          firstTitle={AppText.Creative}
          secondTitle={AppText.Portfolio}
        />
        <img src={robo} className="w-[70px] ml-5 animate-bounce" />
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-4 md:px-72 mt-6">
        <button
          onClick={() => filterPortfolio("all")}
          className="border-purple-600 border-2 text-purple-600 hover:text-white hover:bg-purple-600 transition p-1 px-4 rounded-md"
        >
          Tất cả
        </button>

        <button
          onClick={() => filterPortfolio("ui/ux")}
          className="border-purple-600 border-2 text-purple-600 hover:text-white hover:bg-purple-600 transition p-1 px-4 rounded-md"
        >
          UI/UX
        </button>

        <button
          onClick={() => filterPortfolio("website")}
          className="border-purple-600 border-2 text-purple-600 hover:text-white hover:bg-purple-600 transition p-1 px-4 rounded-md"
        >
          Website
        </button>

        <button
          onClick={() => filterPortfolio("webapp")}
          className="border-purple-600 border-2 text-purple-600 hover:text-white hover:bg-purple-600 transition p-1 px-4 rounded-md"
        >
          Web App
        </button>

        <button
          onClick={() => filterPortfolio("mobile")}
          className="border-purple-600 border-2 text-purple-600 hover:text-white hover:bg-purple-600 transition p-1 px-4 rounded-md"
        >
          Mobile App
        </button>
      </div>

      {/* Portfolio grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 gap-4"
      >
        {portfolioList.map((item) => (
          <div
            key={item.id}
            className="p-3 flex flex-col rounded-lg bg-purple-100
              transition-all ease-in-out hover:scale-105 cursor-pointer"
          >
            <img
              src={item.imageUrl}
              className="h-[180px] object-cover rounded-lg"
            />
            <h1 className="text-[14px] mt-2 text-center font-bold">
              {item.title}
            </h1>
            <p className="text-[12px] text-gray-600 px-2 pb-2 text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

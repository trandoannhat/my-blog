import SectionHeading from "../Shared/SectionHeading";
import { AppText, CompanyImage } from "../Constants";

const Companies = () => {
  return (
    <div id="companies" className="bg-purple-200 p-10">
      <div className="flex justify-center items-center flex-col">
        <SectionHeading
          firstTitle={AppText.CompaniesI}
          secondTitle={AppText.WorkedFor}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {CompanyImage.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center bg-white rounded-lg p-4
                         transition-all hover:scale-110 shadow-sm"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;

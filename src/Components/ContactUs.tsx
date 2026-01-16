import { contactusbg, phone } from "../assets";
import { AppText } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";

function ContactUs() {
  return (
    <div id="contact" className="flex flex-col justify-center mt-10">
      <div className="flex flex-row justify-center items-center">
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} />
        <img src={phone} className="w-[80px] ml-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-evenly px-10 md:px-44 mt-10">
        <img src={contactusbg} className="w-[300px] mx-auto md:mr-10" />

        <div className="w-full">
          <div className="flex flex-col mb-4">
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              placeholder="emailcuaban@gmail.com"
              className="border-[1.5px] px-3 py-2 border-purple-300 hover:border-purple-500 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">Nội dung</label>
            <textarea
              rows={6}
              placeholder="Nhập nội dung bạn muốn gửi..."
              className="border-[1.5px] px-3 py-2 hover:border-purple-500 border-purple-300 rounded-md outline-none resize-none"
            />

            <button className="transition-all ease-in-out hover:scale-105 bg-purple-500 flex flex-row items-center justify-center text-[14px] py-2 mt-5 text-white rounded-md">
              Gửi liên hệ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

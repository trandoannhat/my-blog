import { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const menuItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Giới thiệu", href: "#aboutme" },
    { label: "Kỹ năng", href: "#skills" },
    { label: "Kinh nghiệm", href: "#companies" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <div className="w-full p-4 flex justify-between items-center sticky top-0 bg-white z-50 shadow-sm">
      <img src={logo} className="h-[24px]" />

      <div className="relative">
        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="cursor-pointer hover:scale-110 transition-all duration-200 font-medium"
            >
              <a href={`/${item.href}`}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <div className="md:hidden">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setToggle(true)}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setToggle(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Mobile menu */}
        {toggle && (
          <ul className="md:hidden absolute right-0 mt-3 flex flex-col bg-white shadow-lg border rounded-md overflow-hidden min-w-[160px]">
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="px-4 py-3 hover:bg-purple-100 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <a href={`/${item.href}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;

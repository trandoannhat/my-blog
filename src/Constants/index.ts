/* =======================
   ASSETS IMPORT
======================= */
import {
  angular,
  react,
  typescript,
  nodejs,
  mysql,
  firebase,
  android,
  ionic,
  reactIcon,
  typescriptIcon,
  nodejsIcon,
  mysqlIcon,
  dotnetIcon,
  githubIcon,
  linkedinIcon,
  facebookIcon,
  emailIcon,
} from "../assets";

/* =======================
   TEXT & BRAND
======================= */
export const AppText = {
  hello: "Xin chào 👋",
  Iam: "Tôi là",

  // Brand
  TdnDev: "tdn dev",

  // About
  aboutMeDescripion:
    "Tôi là lập trình viên phần mềm, tập trung vào phát triển ứng dụng web và xây dựng hệ thống frontend – backend cho doanh nghiệp. Tôi quan tâm đến kiến trúc hệ thống, bảo mật và cách xây dựng sản phẩm bền vững.",

  // Section titles
  Skills: "Kỹ năng &",
  Experties: "Chuyên môn",
  Portfolio: "Dự án",
  Creative: "Các dự án",
  CompaniesI: "Công nghệ &",
  WorkedFor: "nền tảng đã sử dụng",
  Contact: "Liên hệ",
  Us: "tôi",

  // Roles
  SoftwareEngineer: "Software Engineer",
  BackendDeveloper: "Backend Developer",
  FrontendDeveloper: "Frontend Developer",

  // Footer
  copywriteText: "© 2026 tdn dev. Code • Learn • Share",
};

/* =======================
   ABOUT SECTION
======================= */
export const aboutSection = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_2175-1809.jpg",
    title: "Thiết kế UI/UX",
    desc: "Thiết kế giao diện web và ứng dụng với Figma, ưu tiên trải nghiệm người dùng và tính nhất quán.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg",
    title: "Lập trình Frontend",
    desc: "Xây dựng giao diện với React, TypeScript, Tailwind CSS, tối ưu hiệu năng.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg",
    title: "Lập trình Backend",
    desc: "Thiết kế API, xử lý dữ liệu, xác thực & phân quyền với NodeJS và .NET.",
  },
];

/* =======================
   SKILLS
======================= */
export const skillsList = [
  { id: 1, icon: angular },
  { id: 2, icon: react },
  { id: 3, icon: typescript },
  { id: 4, icon: nodejs },
  { id: 5, icon: mysql },
  { id: 6, icon: firebase },
  { id: 7, icon: android },
  { id: 8, icon: ionic },
];

/* =======================
   WORK EXPERIENCE
======================= */
export const workDetail = [
  {
    id: 1,
    year: "2024 - Nay",
    compnayName: "Dự án cá nhân & Freelance",
    position: "Software Engineer",
  },
  {
    id: 2,
    year: "2022 - 2024",
    compnayName: "Startup & Doanh nghiệp",
    position: "Fullstack Developer",
  },
  {
    id: 3,
    year: "2020 - 2022",
    compnayName: "Công ty phần mềm",
    position: "Junior Developer",
  },
];

/* =======================
   PORTFOLIO
======================= */
export const portfolio = [
  {
    id: 1,
    title: "Website thương mại điện tử",
    type: "website",
    desc: "Website bán hàng xây dựng bằng React và Tailwind CSS.",
    imageUrl:
      "https://cdn.dribbble.com/users/4189231/screenshots/17343305/media/202173138f9504c2eacd16e70698312c.png",
  },
  {
    id: 2,
    title: "Hệ thống quản lý",
    type: "webapp",
    desc: "Web app quản lý nội bộ sử dụng React và .NET Core.",
    imageUrl: "https://miro.medium.com/max/1400/0*GWvV5kcuVATUfs2r.png",
  },
  {
    id: 3,
    title: "Website doanh nghiệp",
    type: "website",
    desc: "Landing page giới thiệu dịch vụ và sản phẩm cho doanh nghiệp.",
    imageUrl:
      "https://www.radiustheme.com/wp-content/uploads/2022/05/Directory-app.png",
  },
];

/* =======================
   TECHNOLOGIES (Companies)
======================= */
export const CompanyImage = [
  { id: 1, imageUrl: reactIcon, name: "React" },
  { id: 2, imageUrl: typescriptIcon, name: "TypeScript" },
  { id: 3, imageUrl: nodejsIcon, name: "NodeJS" },
  { id: 4, imageUrl: mysqlIcon, name: "MySQL" },
  { id: 5, imageUrl: dotnetIcon, name: ".NET" },
];

/* =======================
   SOCIAL NETWORK
======================= */
export const socialNetwork = [
  {
    id: 1,
    name: "GitHub",
    logo: githubIcon,
    link: "https://github.com/trandoannhat",
  },
  {
    id: 2,
    name: "LinkedIn",
    logo: linkedinIcon,
    link: "https://www.linkedin.com/in/nhat-tran-370b81118/",
  },
  {
    id: 3,
    name: "Facebook",
    logo: facebookIcon,
    link: "https://www.facebook.com/doannhatit",
  },
  {
    id: 4,
    name: "Email",
    logo: emailIcon,
    link: "mailto:doannhatit@gmail.com",
  },
];

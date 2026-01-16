import { AppText, socialNetwork } from "../Constants";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20 py-16 px-6 md:px-40">
      {/* Social links */}
      <div className="flex justify-center gap-6 mb-6">
        {socialNetwork.map((item, index) => (
          <a
            key={item.name ?? index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-[40px] opacity-80 hover:opacity-100"
            />
          </a>
        ))}
      </div>

      {/* Brand text */}
      <div className="text-center text-gray-500 text-sm leading-6">
        <p className="font-semibold text-gray-600">
          © {new Date().getFullYear()} tdn dev
        </p>
        <p>{AppText.copywriteText}</p>
        <p className="mt-2 text-xs">
          Built with React · Tailwind CSS · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
};

export default Footer;

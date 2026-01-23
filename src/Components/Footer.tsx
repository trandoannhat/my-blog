import { AppText, socialNetwork } from "../Constants";

const Footer = () => {
  return (
    /* SỰ KHÁC BIỆT Ở ĐÂY:
       Light Mode: bg-zinc-200 (Đậm hơn nền zinc-100 của Home một chút)
       Dark Mode: bg-[#050505] (Sâu hơn màu #0b0b0b của Home)
    */
    <footer className="bg-zinc-200/50 dark:bg-[#070707] border-t border-zinc-300 dark:border-zinc-800 py-16 px-6 transition-all">
      <div className="max-w-6xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center gap-8 mb-10">
          {socialNetwork.map((item, index) => (
            <a
              key={item.name ?? index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Hiệu ứng tỏa sáng khi hover */}
              <div className="absolute inset-0 bg-purple-600 blur-[20px] opacity-0 group-hover:opacity-30 transition-opacity"></div>

              <img
                src={item.logo}
                alt={item.name}
                className="w-[28px] h-[28px] relative z-10 
                           opacity-50 dark:opacity-40 
                           group-hover:opacity-100 group-hover:scale-125 
                           transition-all duration-500 
                           grayscale group-hover:grayscale-0"
              />
            </a>
          ))}
        </div>

        {/* Brand text */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-zinc-400 dark:bg-zinc-800"></div>
            <p className="font-black text-zinc-900 dark:text-zinc-200 tracking-[0.3em] uppercase text-[10px] md:text-xs">
              © {new Date().getFullYear()} Nhat Dev
            </p>
            <div className="h-[1px] w-12 bg-zinc-400 dark:bg-zinc-800"></div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-500 text-sm max-w-md mx-auto leading-relaxed italic font-medium">
            "{AppText.copywriteText}"
          </p>

          <div className="pt-4">
            <div className="inline-block px-4 py-1 rounded-full bg-zinc-300 dark:bg-zinc-900/50 border border-zinc-400/20 dark:border-zinc-800/50">
              <p className="text-zinc-500 dark:text-zinc-600 text-[9px] uppercase tracking-[2px] font-bold">
                Designed & Built by{" "}
                <span className="text-purple-600 dark:text-purple-500">
                  tdn dev
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

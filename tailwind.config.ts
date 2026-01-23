// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        brand: {
          purple: "#9333ea",
          dark: "#0b0b0b",
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            pre: {
              padding: "1.5rem",
              borderRadius: "1rem",
              backgroundColor: "#09090b",
              border: "1px solid rgba(255,255,255,0.05)",
            },
            code: {
              fontWeight: "500",
              fontFamily: "JetBrains Mono, monospace",
            },
          },
        },
        // Ép màu chữ trắng cho dark mode rõ ràng hơn
        invert: {
          css: {
            "--tw-prose-body": theme("colors.zinc[300]"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-links": theme("colors.purple[400]"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-captions": theme("colors.zinc[400]"),
            "--tw-prose-code": theme("colors.purple[400]"),
            "--tw-prose-pre-code": theme("colors.zinc[200]"),
            "--tw-prose-pre-bg": "#09090b",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

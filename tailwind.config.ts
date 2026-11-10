import type { Config } from "tailwindcss";
const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: v("bg"), surface: v("surface"), ink: v("ink"), muted: v("muted"), line: v("line"), accent: v("accent"), "accent-ink": v("accent-ink") },
      fontFamily: {
        serif: ['"Newsreader Variable"', "Georgia", "serif"],
        sans: ['"Instrument Sans Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

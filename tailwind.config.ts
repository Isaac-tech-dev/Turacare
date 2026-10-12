import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gable: "#143638",
        cream: "#FCECB8",
        paper: "#FDF6DB",
        gold: "#A68942",
        sage: "#8A9A8A",
      },
      fontFamily: { sans: ["var(--font-quicksand)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
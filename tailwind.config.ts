import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',
        'sm-custom': '0.8125rem', // Tamaño intermedio entre xs y sm
        'sm': '0.875rem',
      },

    },
  },
  plugins: [],
} satisfies Config;

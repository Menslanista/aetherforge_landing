/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: "#4e1d96",
        starlight: "#a78bfa",
        void: "#0a0a0f"
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        fadeIn: "fadeIn 2s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

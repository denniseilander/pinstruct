/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      colors: {
        ink: "#070711",
        panel: "#10101c",
        "violet-brand": "#8757ff",
        electric: "#399dff",
        coral: "#ff7558",
        magenta: "#ec4dd8"
      },
      boxShadow: {
        glow: "0 0 60px rgba(135,87,255,.24)",
        blueglow: "0 0 72px rgba(57,157,255,.20)",
        orangeglow: "0 0 72px rgba(255,117,88,.18)"
      }
    }
  }
};

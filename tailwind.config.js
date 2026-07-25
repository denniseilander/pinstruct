/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Segoe UI",
          "sans-serif"
        ]
      },
      colors: {
        // Apple system palette — the same category colors the app uses
        "sys-blue": "#0A84FF",
        // darker blue for solid button backgrounds: white text on #0A84FF is only
        // 3.6:1, this hits 4.7:1 (WCAG AA). Category/pin identity stays sys-blue.
        "sys-blue-deep": "#0071E3",
        "sys-red": "#FF453A",
        "sys-purple": "#BF5AF2",
        "sys-green": "#30D158",
        "sys-orange": "#FF9F0A"
      }
    }
  }
};

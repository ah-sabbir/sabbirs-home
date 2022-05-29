const colors = require("tailwindcss/colors");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./public/index.html",
    "./src/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
    "./src/utils/**/*.{js,jsx,html}",
    "./src/helper/*.{html,js,jsx}",
  ],
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.indigo,
      success: colors.green,
      danger: colors.red,
      warning: colors.orange,
      info: colors.teal,
      light: colors.gray,
      dark: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    extends: {},
  },
  plugins: [],
};

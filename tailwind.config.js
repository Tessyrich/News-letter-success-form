/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("../assets/images/icon-list.svg")',
      },
    },
  },
  plugins: [],
};

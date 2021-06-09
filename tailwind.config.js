module.exports = {
  mode: "jit",
  purge: ["./src/components/*.vue", "./src/pages/*.vue", "./src/App.vue", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};

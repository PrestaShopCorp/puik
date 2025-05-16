export default {
  plugins: {
    "@tailwindcss/postcss": {
      content : {
        files: "./src/*.css",
      }
    },
    cssnano: {
      preset: 'default'
    }
  }
}

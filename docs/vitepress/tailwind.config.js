/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**/*.md",
    "./.vitepress/theme/*.{js,ts,vue}",
    "./.vitepress/components/*.{js,ts,vue}",
    "!./node_modules/**/*"
  ]
};


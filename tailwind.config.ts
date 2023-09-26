import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "purple": "var(--purple)",
        "purple-hover": "var(--purple-hover)",
        "red":"var(--red)",
        "red-hover":"var(--red-hover)",
        "light-grey":"var(--light-grey)",
        "grey":"var(--grey)",
        "white-background":"var(--white-background)",
        "black":"var(--black)"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config

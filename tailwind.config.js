import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Harmony Sans', 'Arial', 'sans-serif'],
      // },
      borderColor: {
        DEFAULT: 'currentColor', // 明亮主题下的默认边框颜色
      },
      backgroundColor: {
        'selection-dark': '#feab04',
        'selection-light': '#01a7fb',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: '#fed504',
          },
          secondary: {
            // DEFAULT: '#f1f3f5',
          },
          // background: {
          //   DEFAULT: '#16181a',
          // },
        }
      },
      light: {
        colors: {
          primary: {
            DEFAULT: '#0653ff',
          },
        },
      }
    }
  })],
}

import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
<<<<<<< HEAD
  darkMode: "class",
  extend: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      transparent: "transparent",
      red: colors.red,
    },
    spacing: {
      18: "4.5rem",
    },
=======
  theme: {
    extend: {
      colors: {
        black: colors.black,
        darkgray: '#18181b',
        lightgray: '#cbd5e1',
        gray: colors.gray,
        white: colors.white,
        transparent: "transparent",
        red: colors.red,
      },
      spacing: {
        18: "4.5rem",
      },
    }
>>>>>>> 953071aee138c0dc084c011ed7b1a179c75d4c2b
  },
} as Options;

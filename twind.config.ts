import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
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
  },
} as Options;

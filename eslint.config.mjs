
import globals from "globals";
import pluginJs from "@eslint/js";
import html from "@html-eslint/eslint-plugin";
import parser from "@html-eslint/parser";

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ...pluginJs.configs.recommended,
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
    },
  },
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
    },
    languageOptions: {
      parser,
    },
    rules: {
      "@html-eslint/indent": ["error", 2],
      "@html-eslint/no-duplicate-attrs": "error",
    },
  },
];

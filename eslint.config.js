import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  { ignores: ["coverage/"]},
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "semi": "warn"
    }
  }
];
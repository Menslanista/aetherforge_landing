import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
        react: {
            version: "detect"
        }
    }
  },
  {
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/prop-types": "off"
    }
  }
];
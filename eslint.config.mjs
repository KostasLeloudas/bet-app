import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslint from '@eslint/js';

export default tseslint.config(
  {
    languageOptions: { globals: globals.browser },
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'eslint:recommended': [pluginReactConfig, eslintPluginPrettier]
    },
    rules: {
      'space-in-parens': ['error', 'always', { exceptions: ['empty'] }],
      semi: ['warn', 'always'],
    },
  },
  pluginJs.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
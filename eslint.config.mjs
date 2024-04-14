import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'eslint:recommended': [eslintPluginPrettier, pluginReactConfig]
    },
    rules: {
      'space-in-parens': ['error', 'always', { exceptions: ['empty'] }],
      semi: ['warn', 'always'],
    },
  },
);

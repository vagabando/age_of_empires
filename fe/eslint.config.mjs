import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
        projectFolderIgnoreList:["**/node_modules/**", "**/dist/**"],
      },
    },
  },
);

module.exports = {
   root: true,
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: [
      "react",
      "react-hooks",
      "@typescript-eslint",
      "import",
      "jsx-a11y",
   ],
   extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier" // prettier 마지막에 둬야 충돌 제거됨
   ],
   settings: {
      react: {
         version: "detect"
      }
   },
   rules: {
      "react/react-in-jsx-scope": "off", // React 17+ 필요 없음
      "import/order": [
         "error",
         {
            alphabetize: { order: "asc", caseInsensitive: true },
            "newlines-between": "always"
         }
      ]
   }
};
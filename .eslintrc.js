module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // Prettierと組み合わせるため
    "prettier",
    // Prettierと組み合わせるため
    "prettier/@typescript-eslint",
  ],
  // node.js v12をターゲットにしたソースコードを対象にするため
  parserOptions: {
    ecmaVersion: 2019,
  },
  // node.jsをターゲットにしたソースコードを対象にするため
  env: {
    node: true,
  },
};

/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^\\w", "^@?\\w", "<THIRD_PARTY_MODULES>", "^[./]"],
};

module.exports = config;

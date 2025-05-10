import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables warnings
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disable 'any' type warnings
      "@typescript-eslint/no-explicit-any": "off",

      // Disable no-require-imports warnings
      "@typescript-eslint/no-require-imports": "off",

      // Disable no-unused-expressions warnings
      "@typescript-eslint/no-unused-expressions": "off",

      // Disable no-this-alias warnings
      "@typescript-eslint/no-this-alias": "off",

      // Disable no-undef warnings
      "@typescript-eslint/no-undef": "off",

      // Disable no-unnecessary-type-constraint warnings
      "@typescript-eslint/no-unnecessary-type-constraint": "off",

      // Disable no-empty-object-type warnings
      "@typescript-eslint/no-empty-object-type": "off",

      // Disable no-unsafe-function-type warnings
      "@typescript-eslint/no-unsafe-function-type": "off",

      // Disable no-wrapper-object-types warnings
      "@typescript-eslint/no-wrapper-object-types": "off",
    },
  },
];

export default eslintConfig;

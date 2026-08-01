import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", ".open-next/**", ".wrangler/**", "node_modules/**", "tmp/**"]
  },
  ...nextVitals
];

export default eslintConfig;

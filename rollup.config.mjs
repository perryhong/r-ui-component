import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commmonJs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import sass from "rollup-plugin-sass";
// import excludeDependencies from "rollup-plugin-exclude-dependencies-from-bundle";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: [
    "src/**/*.test.tsx",
    "src/**/*.stories.ts",
    "src/**/*.stories.tsx",
    "src/**/*.stories.mdx",
    "src/**/*.setupTests.ts",
  ],
};

const config = {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.min.js",
      format: "es",
      plugins: [terser()],
    },
    {
      name: "RecComponent",
      file: "dist/index.umd.js",
      format: "umd",
      exports: "named",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      plugins: [terser()],
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve(),
    commmonJs(),
    json(),
    // excludeDependencies(),
    typescript({ tsconfigOverride: overrides }),
    sass({ output: "dist/index.css" }),
  ],
  external: ["react", "react-dom"],
};

export default config;

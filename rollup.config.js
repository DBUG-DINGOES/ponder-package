import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    external: ["react", "styled-components", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      postcss({
        plugins: [],
        minimize: true,
      }),

      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),

      external(),
      commonjs(),

      terser(),
    ],
  },
];

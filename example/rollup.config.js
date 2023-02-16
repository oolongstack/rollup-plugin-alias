import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "rollup-plugin-alias";
export default defineConfig({
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "es",
  },
  plugins: [
    alias({
      entries: {
        "@": "src",
      },
    }),
    nodeResolve(),
  ],
});

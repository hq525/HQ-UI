/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      // Two entry points: the components, and the dependency-free design
      // tokens (importable from build-time config via "@hq525/hq-ui/tokens").
      entry: {
        index: "./src/index.ts",
        tokens: "./src/tokens.ts",
      },
      name: "hq-ui", // Sets the name of the generated library.
      // CJS output must use the .cjs extension: this package is "type":
      // "module", so Node would treat a .js file as ESM and break require().
      fileName: (format, entryName) =>
        format === "es" ? `${entryName}.es.js` : `${entryName}.cjs`,
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "react/jsx-runtime"], // Defines external dependencies for Rollup bundling.
      output: {
        banner: `"use client";`, // Marks the bundle as a client component for React Server Component environments (e.g. Next.js).
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});
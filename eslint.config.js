// eslint.config.js
import { defineConfig,globalIgnores  } from "eslint/config";
import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";

export default defineConfig([
    globalIgnores(["dist/"]),
    {
      /*  ignores:["dist/","dist/!**","dist/index.cjs","*.esm.js"],*/
        files: ["src/**/*.ts"],

        plugins: {
            js,
        },
       // extends: ["js/recommended"],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
        languageOptions: {
            parser: typescriptParser
        },
    },
]);
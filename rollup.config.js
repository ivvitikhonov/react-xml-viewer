import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import eslint from "@rollup/plugin-eslint";
import nodePolyfills from "rollup-plugin-node-polyfills";

import packageJson from "./package.json";

const onWarn = (warning) => {
    // Skip circular dependency warnings
    if (warning.code === "CIRCULAR_DEPENDENCY") {
        return;
    }
};

export default {
    input: "src/index.tsx",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    onWarn,
    plugins: [
        external(),
        resolve({
            extensions: [".js", ".ts", ".tsx"],
            moduleDirectories: ["node_modules"],
            preferBuiltins: true
        }),
        eslint(),
        commonjs(),
        typescript(),
        nodePolyfills()
    ],
    external: ["react"]
};

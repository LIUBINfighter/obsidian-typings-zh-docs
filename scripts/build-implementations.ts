import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";

const banner =
    `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
*/
`;

const context = await esbuild.context({
    banner: {
        js: banner,
    },
    entryPoints: ["src/implementations/index.ts"],
    bundle: true,
    external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins],
    format: "cjs",
    target: "ESNext",
    logLevel: "info",
    sourcemap: "inline",
    treeShaking: true,
    outfile: "dist/implementations.cjs",
});

await context.rebuild();
process.exit(0);

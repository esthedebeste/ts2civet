/// <reference types="@danielx/civet/dist/types.d.ts" />
import civet from "@danielx/civet/esbuild-plugin"
import * as esbuild from "esbuild"

// https://github.com/evanw/esbuild/issues/1921#issuecomment-1439609735 (minified with terser)
const cjsCompat = `const{require,__filename,__dirname}=await(async()=>{const{createRequire:e}=await import("node:module"),{fileURLToPath:r}=await import("node:url");return{require:e(import.meta.url),__filename:r(import.meta.url),__dirname:r(new URL(".",import.meta.url))}})();`

await esbuild.build({
	entryPoints: ["src/transform.civet"],
	outfile: "dist/transform.js",
	bundle: true,
	minify: true,
	platform: "node",
	format: "esm",
	target: ["es2022"],
	plugins: [civet({})],
	banner: { js: cjsCompat },
})

await esbuild.build({
	entryPoints: ["src/cli.civet"],
	outfile: "dist/cli.js",
	bundle: true,
	minify: true,
	platform: "node",
	format: "esm",
	target: ["es2022"],
	plugins: [
		civet({}),
		{
			// import from public api instead of bundling it into the cli again
			name: "smaller-clijs",
			setup(build) {
				build.onResolve({ filter: /^.\/transform\.civet$/ }, () => ({
					path: "./transform.js",
					external: true,
				}))
			},
		},
	],
	banner: { js: cjsCompat },
})

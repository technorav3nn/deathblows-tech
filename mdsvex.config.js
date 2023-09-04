// @ts-check
import { defineMDSveXConfig as defineConfig } from "mdsvex";

export const mdsvexConfig = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],
	highlight: {
		highlighter: global.highlighter,
	},
});

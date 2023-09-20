import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import entryShaking from "vite-plugin-entry-shaking";

import { highlighter } from "./src/content/config/code-highlight";

// Needed for mdsvex.config.js to access the highlighter function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).highlighter = highlighter;

export default defineConfig({
	plugins: [
		sveltekit(),
		await entryShaking({ targets: ["@tabler/icons-svelte"], extensions: ["svelte"] }),
	],
	server: {
		fs: {
			allow: ["styled-system"],
		},
	},
});

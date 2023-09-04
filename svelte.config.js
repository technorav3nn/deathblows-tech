// @ts-check
import adapterVercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex as mdsvexPreprocess } from "mdsvex";

import { mdsvexConfig } from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({}), mdsvexPreprocess(mdsvexConfig)],
	extensions: [".svelte", ".md"],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterVercel({ runtime: "edge" }),
		alias: {
			"$styled-system": "./styled-system/*",
			$components: "./src/components/*",
		},
		typescript: {
			config: (config) => {
				config.include.push("../styled-system");
				return config;
			},
		},
	},
};

export default config;

import { defineConfig } from "@pandacss/dev";
import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/global-css";
import { semanticTokens } from "./theme/semantic-tokens";
import { tokens } from "./theme/tokens";
import { utilities } from "./theme/utilities";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{js,ts,svelte}"],
	exclude: [],
	presets: ["@pandacss/dev/presets", "@park-ui/presets"],
	outdir: "styled-system",
	staticCss: {
		recipes: {
			button: ["*"],
		},
	},
	theme: {
		extend: {
			recipes: {},
			tokens,
			semanticTokens,
		},
	},
	globalCss,
	conditions,
	utilities,
});

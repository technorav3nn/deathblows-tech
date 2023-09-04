import { cva } from "$styled-system/css";

export const toggleIcon = cva({
	base: {
		cursor: "pointer",
	},
	variants: {
		icon: {
			sun: {
				display: {
					_dark: "block",
					_light: "none",
				},
			},
			moon: {
				display: {
					_dark: "none",
					_light: "block",
				},
			},
		},
	},
});

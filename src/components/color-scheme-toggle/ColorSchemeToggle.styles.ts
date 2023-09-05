import { cva } from "$styled-system/css";

export const toggleIcon = cva({
	base: {
		cursor: "pointer",
		color: "fg.muted",
		strokeWidth: "2px",
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

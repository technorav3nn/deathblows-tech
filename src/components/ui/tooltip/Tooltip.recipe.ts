import { cva, type RecipeVariantProps } from "$styled-system/css";

export type TooltipVariantProps = RecipeVariantProps<typeof tooltip>;

export const tooltip = cva({
	base: {
		py: "1",
		px: "3",
		backgroundColor: "bg.subtle",
		borderRadius: "lg",
		color: {
			_light: "fg.emphasized",
			_dark: "white",
		},
		fontWeight: 700,
		textStyle: "md",
	},
});

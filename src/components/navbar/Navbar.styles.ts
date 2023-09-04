import { css } from "$styled-system/css";
import { token } from "$styled-system/tokens";

export const root = css({
	pos: "fixed",
	zIndex: "50",
	w: "full",
	pt: "5",
	pb: "5",
	overflow: "hidden",
	transitionProperty: "transform",
	transitionTimingFunction: "transform",
	transitionDuration: "300",
	bottom: "2",
});

export const itemHolder = css({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	height: 54,
	width: "full",
	maxWidth: "300px",
	mx: "auto",
	px: 1,
	bg: {
		_light: "bg.default",
		_dark: "bg.subtle",
	},
	color: {
		_light: "fg.emphasized",
		_dark: "white",
	},
	_dark: {
		borderWidth: "1px",
		borderColor: token("colors.border.outline"),
		borderStyle: "solid",
	},
	_light: {
		borderWidth: "1px",
		borderColor: token("colors.border.outline"),
		borderStyle: "solid",
	},
	fontSize: "2xl",
	lineHeight: "2xl",
	borderRadius: "xl",
	backdropFilter: "blur(20px) saturate(80%)",
});

export const item = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "50px",
});

export const itemIcon = css({
	color: {
		_light: "fg.emphasized",
		_dark: "white",
	},
});

export const divider = css({
	w: "3px",
	h: "50%",
	my: 8,
	mx: "-4px",
	bg: "bg.muted",
	rounded: "full",
});

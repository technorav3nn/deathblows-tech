<script lang="ts">
	import { forwardEventsBuilder } from "@smui/common/internal";

	import type { HTMLAttributes } from "svelte/elements";
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore Need to use internal Svelte function
	import { get_current_component } from "svelte/internal";

	import { css, cx } from "$styled-system/css";
	import { button, type ButtonVariantProps } from "$styled-system/recipes";
	import type { SystemStyleObject } from "$styled-system/types";

	type $$Props = {
		css?: SystemStyleObject;
		href?: string;
		target?: string;
		rel?: string;
	} & ButtonVariantProps &
		HTMLAttributes<HTMLButtonElement> &
		HTMLAttributes<HTMLAnchorElement>;

	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let variant: $$Props["variant"] = "primary";
	export let cssProps: SystemStyleObject = {};
	export let size: $$Props["size"] = "md";
	export let href: $$Props["href"] = undefined;
	export let target: $$Props["target"] = "";

	export { cssProps as css };

	const extracted = css.raw(cssProps!);
</script>

<svelte:element
	this={href ? "a" : "button"}
	class={cx(button({ variant, size }), css(extracted))}
	{href}
	{...{ target: href ? target : undefined }}
	{...$$restProps}
	use:forwardEvents
>
	<slot />
</svelte:element>

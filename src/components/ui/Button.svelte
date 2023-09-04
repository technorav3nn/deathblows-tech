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
		class?: string;
		href?: string;
		target?: string;
		rel?: string;
	} & ButtonVariantProps &
		HTMLAttributes<HTMLButtonElement> &
		HTMLAttributes<HTMLAnchorElement>;

	const forwardEvents = forwardEventsBuilder(get_current_component());

	let className: $$Props["class"] = undefined;

	export let variant: $$Props["variant"] = "primary";
	export let cssProp: SystemStyleObject = {};
	export let size: $$Props["size"] = "md";
	export let href: $$Props["href"] = undefined;
	export let target: $$Props["target"] = "";
	export { className as class };
	export { cssProp as css };
</script>

<svelte:element
	this={href ? "a" : "button"}
	use:forwardEvents
	{href}
	{...{ target: href ? target : undefined }}
	class={cx(button({ variant, size }), css({ ...cssProp, borderRadius: "md" }), className)}
	{...$$restProps}
>
	<slot />
</svelte:element>

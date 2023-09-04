<script lang="ts">
	import { forwardEventsBuilder } from "@smui/common/internal";
	import type { ComponentProps } from "svelte";
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore Need to use internal Svelte function
	import { get_current_component } from "svelte/internal";

	import type Button from "./Button.svelte";

	import { css, cx } from "$styled-system/css";
	import { button } from "$styled-system/recipes";

	type $$Props = ComponentProps<Button>;

	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let href: $$Props["href"] = "";
	export let variant: $$Props["variant"] = "primary";
	export let target: $$Props["target"] = "";
	let className: $$Props["class"] = "";
	export { className as class };
</script>

<svelte:element
	this={href ? "a" : "button"}
	use:forwardEvents
	class={cx(button({ variant }), css({ px: 0, borderRadius: "md" }), className)}
	{href}
	{...{ target: href ? target : undefined }}
	{...$$restProps}
>
	<slot />
</svelte:element>

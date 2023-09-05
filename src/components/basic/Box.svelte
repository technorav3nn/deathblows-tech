<script lang="ts">
	import type { SystemStyleObject } from "@pandacss/dev";
	import { forwardEventsBuilder } from "@smui/common/internal";
	import type { HTMLAttributes } from "svelte/elements";
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore Need to use internal Svelte function
	import { get_current_component } from "svelte/internal";

	import { css } from "$styled-system/css";

	const forwardEvents = forwardEventsBuilder(get_current_component());

	type $$Props = {
		element?: HTMLDivElement | null;
		as?: string;
		css?: SystemStyleObject;
	} & HTMLAttributes<HTMLDivElement>;

	export let element: $$Props["element"] = null;
	export let as: $$Props["as"] = "div";
	export let cssProps: $$Props["css"] = {};

	export { cssProps as css };

	const extracted = css.raw(cssProps!);
</script>

<svelte:element
	this={as}
	class={css(extracted)}
	{...$$restProps}
	bind:this={element}
	use:forwardEvents
>
	<slot />
</svelte:element>

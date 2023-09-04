<script lang="ts">
	import { css } from "$styled-system/css";
	import { stack } from "$styled-system/patterns";
	import type { SystemStyleObject } from "$styled-system/types";
	import type { CssProperties } from "$styled-system/types/system-types";

	type $$Props = {
		forwardRef?: HTMLElement;
		as?: keyof HTMLElementTagNameMap;
		cssProps?: SystemStyleObject;
		direction: CssProperties["flexDirection"];
	};

	export let forwardRef: $$Props["forwardRef"] = undefined;
	export let as: $$Props["as"] = "div";
	export let cssProps: $$Props["cssProps"] = {};

	export let direction: $$Props["direction"];

	export { cssProps as css };

	const extracted = css.raw(cssProps!);
</script>

<svelte:element this={as} bind:this={forwardRef} class={css(stack.raw({ direction }), extracted)}>
	<slot />
</svelte:element>

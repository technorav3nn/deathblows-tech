<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	import { css } from "$styled-system/css";
	import type { SystemStyleObject } from "$styled-system/types";

	type $$Props = {
		forwardRef?: HTMLElement;
		component?: keyof HTMLElementTagNameMap;
		css?: SystemStyleObject;
		size?: SystemStyleObject["fontSize"];
		weight?: SystemStyleObject["fontWeight"];
	} & HTMLAttributes<HTMLHeadingElement>;

	export let forwardRef: $$Props["forwardRef"] = undefined;
	export let component: $$Props["component"] = "h1";
	export let cssProps: $$Props["css"] = {};
	export let size: $$Props["size"] = "4xl";
	export let weight: $$Props["weight"] = "bold";

	export { cssProps as css };

	const extracted = css.raw(cssProps!);
</script>

<svelte:element
	this={component}
	class={css({ fontSize: size, fontWeight: weight, letterSpacing: "wide" }, extracted)}
	bind:this={forwardRef}
>
	<slot />
</svelte:element>

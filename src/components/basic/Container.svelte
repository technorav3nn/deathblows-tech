<script lang="ts">
	import { css } from "$styled-system/css";
	import type { SystemStyleObject } from "$styled-system/types";

	type $$Props = {
		forwardRef?: HTMLElement;
		component?: keyof HTMLElementTagNameMap;
		props?: svelteHTML.HTMLAttributes<HTMLButtonElement>;
	} & Partial<SystemStyleObject>;

	//	export let forwardRef: $$Props["forwardRef"] = undefined;
	export let component: $$Props["component"] = "div";
	//	export let props: $$Props["props"] = {};

	const extracted = css.raw($$restProps);
	const generatedCss = css(extracted);

	console.group({ $$restProps, extracted, generatedCss });
</script>

<svelte:element this={component} class={generatedCss}>
	<slot />
</svelte:element>

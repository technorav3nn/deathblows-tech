<script lang="ts">
	import type { SystemStyleObject } from "@pandacss/dev";
	import { forwardEventsBuilder } from "@smui/common/internal";
	import type { HTMLAttributes } from "svelte/elements";
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore Need to use internal Svelte function
	import { get_current_component } from "svelte/internal";

	import { css } from "$styled-system/css";
	import { isCssProperty } from "$styled-system/jsx/is-valid-prop.mjs";
	import type { SystemProperties } from "$styled-system/types/style-props";
	import type { MinimalNested } from "$styled-system/types/system-types";

	const forwardEvents = forwardEventsBuilder(get_current_component());

	type $$Props = {
		element?: HTMLDivElement | null;
		as?: string;
	} & HTMLAttributes<HTMLDivElement> &
		Partial<SystemProperties & MinimalNested<SystemStyleObject>>;

	export let element: $$Props["element"] = null;
	export let as: $$Props["as"] = "div";

	const props = $$restProps as $$Props | { [key: string]: unknown } as $$Props;

	const extractedProps: Record<string, SystemStyleObject | number | string> = {};
	for (const key in props) {
		if (isCssProperty(key)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			extractedProps[key] = (props as any)[key];
		}
	}

	const extractedCss = css.raw(extractedProps as SystemStyleObject);
</script>

<svelte:element
	this={as}
	class={css(extractedCss)}
	{...$$restProps}
	bind:this={element}
	use:forwardEvents
>
	<slot />
</svelte:element>

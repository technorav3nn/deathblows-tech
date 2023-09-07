<script lang="ts">
	import { createProgress } from "@melt-ui/svelte";
	import { writable } from "svelte/store";

	import { css } from "$styled-system/css";

	export let progress = 100;
	export let max = 100;

	const value = writable(progress);

	const {
		elements: { root },
		options: { max: maxOption },
	} = createProgress({
		value,
		max,
	});
</script>

<div
	class={css({
		position: "relative",
		h: "5px",
		maxW: "275px",
		overflow: "hidden",
		rounded: "full",
		background: "bg.subtle",
	})}
	{...$root}
	use:root
>
	<div
		class={css({
			h: "100%",
			w: "100%",
			bgColor: "accent.default",
			transitionProperty: "transform",
			transitionTimingFunction: "cubic.bezier(0.65,0,0.35,1)",
			transitionDuration: "660ms",
		})}
		style={`transform: translateX(-${100 - (100 * ($value ?? 0)) / ($maxOption ?? 1)}%)`}
	/>
</div>

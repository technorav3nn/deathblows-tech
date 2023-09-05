<script lang="ts">
	import * as classes from "./Navbar.styles";

	import Tooltip from "$components/ui/tooltip/Tooltip.svelte";

	export let href: string | undefined = undefined;
	export let tooltipLabel: string;
</script>

<Tooltip>
	<div slot="content">{tooltipLabel}</div>
	<div slot="trigger">
		<svelte:element this={href ? "a" : "button"} {href} class={classes.item}>
			<slot />
		</svelte:element>
	</div>
</Tooltip>

<style>
	/* :global(svg) {
		width: 1000px;
	} */
</style>

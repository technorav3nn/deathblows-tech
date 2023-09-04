<script lang="ts">
	import { Button } from "bits-ui";

	import * as classes from "./Navbar.styles";

	import Tooltip from "$components/ui/tooltip/Tooltip.svelte";

	export let href: string | undefined = undefined;
	export let tooltipLabel: string;
</script>

<Tooltip>
	<div slot="content">{tooltipLabel}</div>
	<div slot="trigger">
		<Button.Root {href} class={classes.item}>
			<slot />
		</Button.Root>
	</div>
</Tooltip>

<style>
	/* :global(svg) {
		width: 1000px;
	} */
</style>

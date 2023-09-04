<script>
	import ColorSchemeToggle from "../color-scheme-toggle/ColorSchemeToggle.svelte";

	import { NAVBAR_ITEMS } from "./Navbar.data";
	import * as classes from "./Navbar.styles";
	import NavbarItem from "./NavbarItem.svelte";

	import { colorSchemeStore } from "$lib/stores/color-scheme";
	import { cx } from "$styled-system/css";
	import { container } from "$styled-system/patterns";

	$: csToggleTooltipLabel = $colorSchemeStore === "dark" ? "Light mode" : "Dark mode";
</script>

<nav class={cx(classes.root)}>
	<div class={container()}>
		<div class={classes.itemHolder}>
			{#each NAVBAR_ITEMS as { icon, href, label } (href)}
				<NavbarItem {href} tooltipLabel={label}>
					<svelte:component this={icon} class={classes.itemIcon} />
				</NavbarItem>
			{/each}
			<hr class={classes.divider} />
			<NavbarItem tooltipLabel={csToggleTooltipLabel}>
				<ColorSchemeToggle />
			</NavbarItem>
		</div>
	</div>
</nav>

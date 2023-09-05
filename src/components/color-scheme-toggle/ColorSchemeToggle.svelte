<script lang="ts">
	import { IconSun, IconMoon } from "@tabler/icons-svelte";

	import { toggleIcon } from "./ColorSchemeToggle.styles";

	import IconButton from "$components/ui/IconButton.svelte";

	import { colorSchemeStore } from "$lib/stores/color-scheme";

	export let size: number | undefined = undefined;

	function toggleColorScheme() {
		if ($colorSchemeStore === "light") {
			$colorSchemeStore = "dark";
		} else {
			$colorSchemeStore = "light";
		}
	}
</script>

<IconButton
	variant="tertiary"
	css={{ ml: -2 }}
	aria-label="Toggle color scheme"
	on:click={toggleColorScheme}
>
	<IconSun class={toggleIcon({ icon: "sun" })} {size} />
	<IconMoon
		class={toggleIcon({
			icon: "moon",
		})}
		{size}
	/>
</IconButton>

<script lang="ts">
	import "@fontsource-variable/inter";
	import "@fontsource-variable/plus-jakarta-sans";

	import "../app.pcss";

	import RootShell from "../components/shell/AppShell.svelte";

	import { browser } from "$app/environment";
	import { colorSchemeStore } from "$lib/stores/color-scheme";

	if (browser) {
		const css = document.createElement("style");

		colorSchemeStore.subscribe(() => {
			disableAnimation();
			enableAnimation();
		});

		// eslint-disable-next-line svelte/no-inner-declarations
		function enableAnimation() {
			(() => window.getComputedStyle(document.body))();
			setTimeout(() => {
				document.head.removeChild(css);
			}, 1);
		}

		// eslint-disable-next-line svelte/no-inner-declarations
		function disableAnimation() {
			css.appendChild(
				document.createTextNode(
					`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
				)
			);
			document.head.appendChild(css);
		}
	}

	export let data;

	$: pathname = data.pathname;

	/** eslint-disable svelte/no-inner-declarations */
</script>

<RootShell {pathname}>
	<slot />
</RootShell>

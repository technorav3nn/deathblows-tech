<script lang="ts">
	import "@fontsource-variable/inter";
	import "@fontsource-variable/plus-jakarta-sans";
	import { onMount } from "svelte";

	import "../app.pcss";

	import RootShell from "../components/shell/AppShell.svelte";

	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

	import { browser } from "$app/environment";
	import { colorSchemeStore } from "$lib/stores/color-scheme";

	const queryClient = new QueryClient();

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

		onMount(() => {
			disableAnimation();
			enableAnimation();
		});
	}

	export let data;

	$: pathname = data.pathname;

	/** eslint-disable svelte/no-inner-declarations */
</script>

<QueryClientProvider client={queryClient}>
	<RootShell {pathname}>
		<slot />
	</RootShell>
</QueryClientProvider>

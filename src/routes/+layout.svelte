<script lang="ts">
	import "@fontsource-variable/inter";
	import "@fontsource-variable/plus-jakarta-sans";

	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import { onMount } from "svelte";

	import "../app.pcss";

	import RootShell from "../components/shell/AppShell.svelte";

	import { browser } from "$app/environment";
	import { LOCAL_STORAGE_KEY, colorSchemeStore } from "$lib/stores/color-scheme";

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
			},
		},
	});

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

<svelte:head>
	<script data-theme-script="true" data-local-storage-key={LOCAL_STORAGE_KEY}>
		const key = document.currentScript.dataset.localStorageKey;
		const colorScheme = localStorage[key];
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (colorScheme === "dark" || (colorScheme !== "light" && prefersDark)) {
			document.documentElement.setAttribute("data-color-scheme", "dark");
		} else {
			document.documentElement.setAttribute("data-color-scheme", "light");
		}
	</script>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<RootShell {pathname}>
		<slot />
	</RootShell>
</QueryClientProvider>

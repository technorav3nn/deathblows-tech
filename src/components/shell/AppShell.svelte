<script lang="ts">
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";

	import Box from "$components/basic/Box.svelte";

	import { slideFade } from "$lib/util/transitions/slide-fade";

	export let pathname: string;
</script>

<Box
	css={{
		minHeight: "100vh",
		bg: "bg.default",
		display: "flex",
		flexDirection: "column",
		maxW: "3xl",
		mx: "auto",
		px: 7,
		// py: 12,
	}}
>
	<Header />
	{#key pathname}
		<div in:slideFade={{ duration: 200, y: 10 }}>
			<slot />
		</div>
	{/key}
	<Footer />
</Box>

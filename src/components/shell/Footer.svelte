<script>
	import Stack from "$components/basic/Stack.svelte";

	import SvelteIcon from "$components/ui/icons/SvelteIcon.svelte";

	import { css } from "$styled-system/css";
	import { divider } from "$styled-system/patterns";
</script>

<div class={css({ mt: "auto" })}>
	<footer class={css({ mt: 10 })}>
		<hr class={divider()} />
		<Stack
			direction="row"
			css={{
				alignItems: "center",
				justifyContent: "space-between",
				py: 5,
			}}
		>
			<Stack direction="row" css={{ alignItems: "center" }}>
				<p class={css({ fontSize: "sm", fontWeight: 500 })}>deathblows.tech</p>
			</Stack>
			<Stack direction="row" css={{ gap: 1, alignItems: "center" }}>
				<p class={css({ fontSize: "sm", fontWeight: 500 })}>Made with ❤️ and</p>
				<SvelteIcon size={16} />
			</Stack>
		</Stack>
	</footer>
</div>

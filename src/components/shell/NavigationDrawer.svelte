<script lang="ts">
	import { IconMenu } from "@tabler/icons-svelte";

	import Stack from "$components/basic/Stack.svelte";
	import Button from "$components/ui/Button.svelte";
	import Drawer from "$components/ui/drawer/Drawer.svelte";
	import IconButton from "$components/ui/IconButton.svelte";

	import { HEADER_ITEMS } from "$lib/config";
</script>

<Drawer title="Menu">
	<IconButton variant="tertiary" slot="trigger" css={{ p: 0 }}>
		<IconMenu />
	</IconButton>

	<div slot="content" let:close>
		<Stack
			direction="column"
			css={{
				gap: 1,
				mt: 5,
				p: 3,
				// for each child of the stack, apply the following styles
				"& > *": {
					p: 3,
					fontSize: "lg",
				},
				alignItems: "flex-start",
			}}
		>
			{#each HEADER_ITEMS as { href, label } (href)}
				<Button
					{href}
					aria-label={`Go to ${label}`}
					variant="tertiary"
					css={{
						w: "full",
					}}
					on:click={() => {
						close();
					}}
				>
					{label}
				</Button>
			{/each}
		</Stack>
	</div>
</Drawer>

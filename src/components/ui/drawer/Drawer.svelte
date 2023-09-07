<script lang="ts">
	import { createDialog } from "@melt-ui/svelte";
	import { IconX } from "@tabler/icons-svelte";

	import { writable } from "svelte/store";
	import { fade, fly } from "svelte/transition";

	import { drawer } from "./Drawer.recipe";

	import { emphasizedIn, emphasizedOut } from "$lib/util/transitions/easings";
	import { css, cx } from "$styled-system/css";
	import { stack } from "$styled-system/patterns";
	import { button } from "$styled-system/recipes";

	const open = writable(false);

	type $$Slots = {
		trigger: {};
		content: {
			close: () => void;
		};
		default: {
			close: () => void;
			open: () => void;
			state: typeof open;
		};
	};

	export let title: string;

	const {
		elements: { trigger, overlay, content, title: titleElement, close, portalled },
	} = createDialog({
		closeOnOutsideClick: true,
		closeOnEscape: true,
		forceVisible: true,
		open,
	});

	const classes = drawer({ placement: "right" });

	function closeDrawer() {
		open.set(false);
	}
</script>

<slot close={closeDrawer} open={() => open.set(true)} state={open} />

<div {...$trigger} use:$trigger.action>
	<slot name="trigger" />
</div>

<div {...$portalled} use:$portalled.action>
	{#if $open}
		<div
			class={classes.backdrop}
			{...$overlay}
			transition:fade={{ duration: 225 }}
			use:$overlay.action
		/>
		<div class={classes.container}>
			<div
				class={classes.content}
				in:fly={{
					x: 400,
					duration: 400,
					opacity: 1,
					easing: emphasizedIn,
				}}
				out:fly={{
					x: 400,
					duration: 200,
					opacity: 1,
					easing: emphasizedOut,
				}}
				{...$content}
				use:$content.action
			>
				<div class={stack({ gap: 6 })}>
					<div class={stack({ gap: 1 })}>
						<h2 class={classes.title} {...$titleElement} use:$titleElement.action>{title}</h2>
					</div>
				</div>
				<button
					class={cx(
						button({ variant: "tertiary" }),
						css({ position: "absolute", top: 6, right: 4, padding: 0 })
					)}
					{...$close}
					use:$close.action
				>
					<IconX />
				</button>
				<slot name="content" close={closeDrawer} />
			</div>
		</div>
	{/if}
</div>

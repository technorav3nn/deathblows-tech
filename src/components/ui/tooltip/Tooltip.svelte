<script lang="ts">
	import { createTooltip } from "@melt-ui/svelte";

	import { tooltip } from "./Tooltip.recipe";

	import { slideFade } from "$lib/util/transitions/slide-fade";

	type $$Slots = {
		trigger: {};
		content: {};
	};

	const {
		elements: { trigger, content },
		states: { open },
	} = createTooltip({
		positioning: {
			placement: "top",
			gutter: 20,
		},
		openDelay: 20,
		closeDelay: 20,
		closeOnPointerDown: false,
		portal: "body",
		forceVisible: true,
	});
</script>

<button {...$trigger} use:$trigger.action>
	<slot name="trigger" />
</button>

{#if $open}
	<div
		class={tooltip({})}
		data-open={$open}
		{...$content}
		use:$content.action
		transition:slideFade={{ duration: 100 }}
	>
		<slot name="content" />
	</div>
{/if}

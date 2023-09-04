<script lang="ts">
	import { IconArrowRight } from "@tabler/icons-svelte";
	import { fly } from "svelte/transition";

	import Stack from "$components/basic/Stack.svelte";

	import { slideFade } from "$lib/util/transitions/slide-fade";
	import { css } from "$styled-system/css";
	import { badge } from "$styled-system/recipes";

	type InferArrayType<T extends unknown[]> = T extends (infer U)[] ? U : never;
	type ServerPostResponse = InferArrayType<import("../$types").PageServerData["posts"]>;

	export let post: ServerPostResponse;
	export let index: number;

	let isPostHovered = false;
	let currentlyHoveredPost: ServerPostResponse | null = null;

	function onPostMouseEnter(post: ServerPostResponse) {
		isPostHovered = true;
		currentlyHoveredPost = post;
	}

	function onPostMouseLeave(post: ServerPostResponse) {
		isPostHovered = false;
		if (currentlyHoveredPost === post) {
			currentlyHoveredPost = null;
		}
	}
</script>

<a
	href={`/posts/${post.slug}`}
	class={css({
		display: "block",
		mb: 3,
		padding: 3,
		rounded: "md",
		borderColor: "border.default",
		borderWidth: "1px",
		bg: "bg.canvas",
		transition: "background-color 0.2s ease-in-out",
		_hover: { bg: "bg.subtle" },
	})}
	in:slideFade={{ delay: 175 * index, duration: 200 }}
	on:mouseenter={() => onPostMouseEnter(post)}
	on:mouseleave={() => onPostMouseLeave(post)}
>
	<Stack direction="row" css={{ justifyContent: "space-between" }}>
		<section>
			<p class={css({ fontSize: "md", fontWeight: "semibold" })}>{post.meta.title}</p>
			{#if post.meta.tags}
				<div class={css({ mt: 1, display: "flex", gap: 1 })}>
					{#each post.meta.tags as tag}
						<span class={badge({ variant: "subtle", size: "sm" })}>
							#{tag}
						</span>
					{/each}
				</div>
			{/if}
		</section>
		<section class={css({ alignSelf: "center" })} role="none">
			{#if isPostHovered && currentlyHoveredPost === post}
				<div transition:fly={{ x: -10, duration: 300 }}>
					<IconArrowRight />
				</div>
			{/if}
		</section>
	</Stack>
</a>

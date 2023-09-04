<script lang="ts">
	import { onMount } from "svelte";

	import Post from "./_components/Post.svelte";

	import Title from "$components/basic/Title.svelte";

	import { css } from "$styled-system/css";
	import { divider } from "$styled-system/patterns";

	export let data;
	const { posts } = data;

	let canAnimate = false;

	onMount(() => (canAnimate = true));
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<Title>Posts</Title>
<p class={css({ fontSize: "md", fontWeight: "semibold", color: "fg.subtle" })}>
	{posts.length}
	{posts.length === 1 ? "post" : "posts"}
</p>
<div class={divider({ mt: 3 })} />

<div class={css({ mt: 5 })}>
	{#each posts as post, index (post.slug)}
		{#if canAnimate}
			{#key post.slug}
				<Post {post} {index} />
			{/key}
		{/if}
	{/each}
</div>

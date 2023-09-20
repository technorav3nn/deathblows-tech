<script lang="ts">
	import { IconBrandLastfm } from "@tabler/icons-svelte";
	import { createQuery } from "@tanstack/svelte-query";
	import { Image } from "@unpic/svelte";

	import Stack from "$components/basic/Stack.svelte";

	import songPlaceholderImage from "$lib/assets/images/song-placeholder.webp";

	import type { State } from "$lib/util/fm/types";
	import { css } from "$styled-system/css";
	import { tooltip } from "$components/ui/tooltip/Tooltip.recipe";

	const query = createQuery<State>({
		queryKey: ["now-playing"],
		queryFn: () => fetch("/api/fm").then((res) => res.json()),
		refetchInterval: 5000,
	});
</script>

<div
	class={css({
		display: "grid",
		gridTemplateColumns: "auto 1fr",
		gap: 3,
		maxW: "300px",
		bg: "bg.canvas",
		borderWidth: "1px",
		borderColor: "border.emphasized",
		borderRadius: "md",
		p: 3,
	})}
>
	{#if $query.isError}
		<p>{$query.error}</p>
	{/if}
	<Image
		src={$query.data?.song?.art ?? songPlaceholderImage}
		alt="Album cover"
		width={48}
		height={48}
		class={css({ rounded: "sm" })}
	/>
	<Stack
		direction="row"
		css={{ alignItems: "flex-start", justifyContent: "space-between", fontSize: "sm" }}
	>
		{#if $query.data?.status === "idle"}
			<p class={css({ fontWeight: "bold", letterSpacing: "tight" })}>Not Listening To Anything</p>
		{:else}
			<Stack direction="column">
				<p class={css({ fontWeight: "black", lineClamp: 1 })}>
					{#if !$query.isLoading && !$query.isError}
						{$query.data?.song?.artist} - {$query.data?.song?.name}
					{:else}
						Loading...
					{/if}
				</p>
				<p class={css({ fontSize: "xs", color: "fg.muted" })}>
					{#if !$query.isLoading && !$query.isError}
						{$query.data?.song?.album}
					{:else}
						Loading...
					{/if}
				</p>
			</Stack>
		{/if}
		<a
			href="https://last.fm/user/Death_Blows"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Link to my last.fm page"
			title="Last.fm profile"
		>
			<IconBrandLastfm size={20} />
		</a>
	</Stack>
</div>

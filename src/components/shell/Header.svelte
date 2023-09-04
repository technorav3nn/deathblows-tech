<script lang="ts">
	import { Image } from "@unpic/svelte";

	import NavigationDrawer from "./NavigationDrawer.svelte";

	import Stack from "$components/basic/Stack.svelte";
	import ColorSchemeToggle from "$components/color-scheme-toggle/ColorSchemeToggle.svelte";

	import { page } from "$app/stores";

	import profilePic from "$lib/assets/images/profile-pic.jpeg";
	import { HEADER_ITEMS } from "$lib/config";
	import { css } from "$styled-system/css";

	$: currentPage = $page.url.pathname;
	$: currentPageIsPath = (path: string) => {
		if (path === "/") return currentPage === path;
		return currentPage.startsWith(path);
	};
</script>

<Stack
	direction="row"
	css={{
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 16,
		paddingTop: 14,
	}}
>
	<Stack
		direction="row"
		css={{
			alignItems: "center",
		}}
	>
		<Image
			src={profilePic}
			alt="my profile pic, a serval laying down"
			class={css({
				borderRadius: "full",
				objectFit: "cover",
				objectPosition: "left",
				width: 8,
				height: 8,
			})}
			priority
			width={8}
			height={8}
		/>
	</Stack>
	<!-- Header on Desktop or Tablet -->
	<Stack
		direction="row"
		css={{
			alignItems: "center",
			gap: 6,
			smDown: {
				display: "none",
			},
		}}
	>
		{#each HEADER_ITEMS as { label, href }}
			<a
				{href}
				class={css({
					color: currentPageIsPath(href) ? "fg.default" : "fg.subtle",
					borderBottomColor: currentPageIsPath(href) ? "accent.default" : "transparent",
					borderBottomWidth: 2,
					fontSize: "md",
					fontFamily: "plus-jakarta-sans",
					fontWeight: "semibold",
					transition: "color 0.2s ease-in-out",
					_hover: {
						textColorWithOpacity: currentPageIsPath(href) ? "fg.default/17" : "fg.default/1",
					},
				})}
			>
				{label}
			</a>
		{/each}
		<ColorSchemeToggle />
	</Stack>
	<Stack
		direction="row"
		css={{
			alignItems: "center",
			display: {
				smDown: "flex",
				mdTo2xl: "none",
			},
		}}
	>
		<NavigationDrawer />
		<ColorSchemeToggle />
	</Stack>
</Stack>

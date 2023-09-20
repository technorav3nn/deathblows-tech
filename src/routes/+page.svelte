<script lang="ts">
	import { IconBrandDiscord, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-svelte";

	import { Image } from "@unpic/svelte";

	import NowPlaying from "./_components/NowPlaying/NowPlaying.svelte";

	import Stack from "$components/basic/Stack.svelte";
	import Title from "$components/basic/Title.svelte";
	import Button from "$components/ui/Button.svelte";
	import IconButton from "$components/ui/IconButton.svelte";

	import profilePic from "$lib/assets/images/profile-pic.jpeg";
	import { css } from "$styled-system/css";
	import { wrap } from "$styled-system/patterns";
	import type { ButtonVariant } from "$styled-system/recipes";
	import Box from "$components/basic/Box.svelte";
	import Test from "./test.svelte";

	const DEFAULT_VARIANT: ButtonVariant["variant"] = "secondary";
	const DEFAULT_SIZE = 20;
</script>

<svelte:head>
	<title>deathblows.tech - personal website</title>
	<meta name="description" content="My personal website made with Sveltekit!" />
	<meta
		name="keywords"
		content="svelte, sveltekit, deathblows, deathblows.tech, death, deathblows.tech, sveltejs"
	/>
	<meta name="author" content="deathblows" />
	<meta name="og:title" content="deathblows.tech - personal website" />
	<meta name="og:description" content="My personal website made with Sveltekit!" />
	<meta name="og:type" content="website" />
	<meta name="og:url" content="https://deathblows.tech" />
	<meta name="og:image" content={profilePic} />
</svelte:head>

<div
	class={wrap({
		gap: "6",
		alignItems: "center",
		flexDirection: "row-reverse",
		justifyContent: "space-between",
		mdDown: {
			flexDirection: "column",
			alignItems: "flex-start",
			gap: "8",
		},
	})}
>
	<Image
		src={profilePic}
		alt="my profile pic, a serval laying down"
		class={css({
			borderRadius: "full",
			objectFit: "cover",
			objectPosition: "left",
			width: 125,
			height: 125,
			mdDown: { display: "none" },
		})}
		priority
		width={125}
		height={125}
	/>
	<section>
		<Title size="4xl" weight="bold">hi, i'm death 👋🏻</Title>

		<Stack
			direction="column"
			css={{ alignItems: "flex-start", gap: { base: 0, smDown: 0 }, mt: 2 }}
		>
			<p
				class={css({
					fontSize: "md",

					color: "fg.subtle",
				})}
			>
				Full stack developer, Software engineer
			</p>
			<p
				class={css({
					fontSize: "md",
					color: "fg.subtle",
				})}
			>
				15 y.o. - he/him.
			</p>
		</Stack>
	</section>
</div>

<Stack direction="row" css={{ gap: 2, mt: 3, mb: 8 }}>
	<Button>more about me</Button>
	<IconButton
		variant={DEFAULT_VARIANT}
		href="https://github.com/technorav3nn"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="github"
	>
		<IconBrandGithub size={DEFAULT_SIZE} />
	</IconButton>
	<IconButton
		variant={DEFAULT_VARIANT}
		href="https://discord.com/users/304043360963002370"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="discord"
	>
		<IconBrandDiscord size={DEFAULT_SIZE} />
	</IconButton>
	<IconButton
		variant={DEFAULT_VARIANT}
		href="https://google.com"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="twitter"
	>
		<IconBrandTwitter size={DEFAULT_SIZE} />
	</IconButton>
</Stack>

<NowPlaying />

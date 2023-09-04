<script>
	import { css } from "$styled-system/css";
	import { divider } from "$styled-system/patterns";
	import { article } from "$styled-system/recipes";

	export let data;

	const {
		post: { html, metadata },
	} = data;
</script>

<h1 class={css({ fontSize: "4xl", fontWeight: "bold", mb: 3 })}>{metadata.title}</h1>
<hr class={divider({ mb: 5 })} />

<div class={article({})}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html html}
</div>

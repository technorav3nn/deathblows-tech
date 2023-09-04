export function globImportPosts() {
	return import.meta.glob("/src/content/posts/*.{md,svx,svelte.md}");
}

import type { PrerenderEntryGenerator } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

import { getAllPosts } from "$lib/util/posts/get-all-posts";

export const load = (async () => {
	const posts = await getAllPosts();
	return { posts };
}) satisfies PageServerLoad;

export const entries = (async () => {
	const posts = await getAllPosts();
	const postsMappedToSlugs = posts.map((post) => ({ slug: post.slug }));

	return postsMappedToSlugs;
}) satisfies PrerenderEntryGenerator;

export const prerender = true;

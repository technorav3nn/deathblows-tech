import type { PageServerLoad } from "./$types";

import { getPost } from "$lib/util/posts/get-post";

export const load = (async ({ params }) => {
	const post = await getPost(params.slug);
	return { post };
}) satisfies PageServerLoad;

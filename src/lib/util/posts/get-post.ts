import { error } from "@sveltejs/kit";

import { globImportPosts } from "./glob-import-posts";

import type { BlogPost, MdsvexResolver } from "$lib/types/mdsvex";
import { slugFromPath } from "$lib/util/slug-from-path";

export async function getPost(slug: string) {
	const allPostFiles = globImportPosts();

	let match: { path?: string; resolver?: MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(allPostFiles)) {
		if (slugFromPath(path) === slug) {
			match = { path, resolver: resolver as unknown as MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post) {
		throw error(404, "Post not found");
	}

	return {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		html: (post as any).default.render().html,
		metadata: post.metadata as unknown as BlogPost["metadata"],
	} satisfies BlogPost;
}

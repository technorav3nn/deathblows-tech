import { globImportPosts } from "./glob-import-posts";

import type { BlogPost } from "$lib/types/mdsvex";

export async function getAllPosts() {
	const allPostFiles = globImportPosts();
	const postFilesArr = Object.entries(allPostFiles);

	const posts = await Promise.all(
		postFilesArr.map(async ([path, resolve]) => {
			// Get the metadata from the blog post
			const { metadata } = (await resolve()) as BlogPost;

			return {
				meta: metadata,
				// Remove the /src/routes and .md from the path
				// e.g. /src/routes/blog/first.md -> /blog/first
				slug: path.slice(19, -3),
			};
		})
	);

	// Sort the posts (in place) by the date they were created
	posts.sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime());

	return posts;
}

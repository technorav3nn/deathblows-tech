import type { LayoutLoad } from "./$types";

export const ssr = true;

export const load = (async ({ url: { pathname } }) => {
	return {
		pathname,
	};
}) satisfies LayoutLoad;

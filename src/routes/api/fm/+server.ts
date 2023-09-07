import type { RequestEvent, RequestHandler } from "./$types";

import { LASTFM_API_KEY } from "$env/static/private";

import { getNowPlaying } from "$lib/util/fm/get-now-playing";

export const GET: RequestHandler = async (event) => {
	const status = await getNowPlaying(event as RequestEvent, "Death_Blows", LASTFM_API_KEY);

	return new Response(JSON.stringify(status));
};

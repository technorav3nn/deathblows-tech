import type { RequestEvent } from "@sveltejs/kit";
import type { LastFMResponseBody, TrackImage, State } from "./types";

const buildEndpoint = (username: string, token: string) =>
	`//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${token}&format=json&limit=1`;

function parseSong(body: LastFMResponseBody | null, imageSize: TrackImage["size"]): State {
	if (!body) {
		return {
			status: "connecting",
			song: null,
		};
	}

	const lastSong = body.recenttracks.track?.[0];

	if (!lastSong || !lastSong["@attr"]?.nowplaying) {
		return {
			status: "idle",
			song: null,
		};
	}

	const image = lastSong.image.find((i) => {
		return i.size === imageSize;
	});

	return {
		status: "playing",
		song: {
			name: lastSong.name,
			artist: lastSong.artist["#text"],
			art: image?.["#text"] ?? lastSong.image[0]["#text"],
			url: lastSong.url,
			album: lastSong.album["#text"],
		},
	};
}

export async function getNowPlaying(
	fetch: RequestEvent["fetch"],
	username: string,
	token: string
): Promise<State> {
	const endpoint = buildEndpoint(username, token);

	try {
		const result = await fetch(endpoint);
		const track = (await result.json()) as LastFMResponseBody;

		const status = parseSong(track, "extralarge");
		return status;
	} catch (e) {
		console.error(e);
		return { status: "error", song: null };
	}
}

import type { SvelteComponent } from "svelte";

export interface MdsvexFile {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: typeof SvelteComponent<any, any, any>;
	metadata: Record<string, string>;
}

export interface BlogPost {
	metadata: {
		title: string;
		createdAt: string;
		tags: string[];
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	html?: string;
}

export type MdsvexResolver = () => Promise<MdsvexFile>;

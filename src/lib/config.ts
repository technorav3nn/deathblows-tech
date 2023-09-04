import { IconArticle, IconFolders, IconHome, IconUser } from "@tabler/icons-svelte";

export const HEADER_ITEMS = [
	{ href: "/", label: "Home", icon: IconHome },
	{ href: "/about", label: "About", icon: IconUser },
	{ href: "/posts", label: "Posts", icon: IconArticle },
	{ href: "/projects", label: "Projects", icon: IconFolders },
];

export const ICON_SIZE = "1.5rem";
export const ICON_STROKE_WIDTH = 1.5;

import { getHighlighter } from "shiki";

/**
 * Escape html characters
 */
function escapeHtml(code: string) {
	return code.replace(/[{}`]/g, (character) => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return { "{": "&lbrace;", "}": "&rbrace;", "`": "&grave;" }[character]!;
	});
}

/**
 * Returns array of line numbers to be highlghted
 */
function rangeParser(rangeString: string) {
	const result: number[] = [];
	const ranges = rangeString.split(",");
	ranges.forEach((element) => {
		if (element.indexOf("-") === -1) {
			result.push(parseInt(element, 10));
		} else {
			const limits = element.split("-");
			const start = parseInt(limits[0], 10);
			const end = parseInt(limits[1], 10);
			for (let i = start; i <= end; i += 1) {
				result.push(i);
			}
		}
	});
	return result;
}

export async function highlighter(code: string, lang?: string, meta?: string) {
	const shikiHighlighter = await getHighlighter({
		theme: "css-variables",
	});

	let html;
	if (!meta) {
		html = shikiHighlighter.codeToHtml(code, {
			lang,
		});
	} else {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const highlightMeta = /{([\d,-]+)}/.exec(meta)![1];
		const highlightLines = rangeParser(highlightMeta);

		html = shikiHighlighter.codeToHtml(code, {
			lang,
			lineOptions: highlightLines.map((element) => ({
				line: element,
				classes: ["highlight-line"],
			})),
		});
	}

	return escapeHtml(html);
}

export default highlighter;

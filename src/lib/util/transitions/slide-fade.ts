import { slide, type EasingFunction, type TransitionConfig } from "svelte/transition";

export function slideFade(
	node: Element,
	options: { duration?: number; delay?: number; y?: number; easing?: EasingFunction }
) {
	const { duration, delay } = options;
	const slideTrans = slide(node, options);

	return {
		duration,
		delay,
		easing: slideTrans.easing,
		css: (t, u) => {
			return `
                opacity: ${t};
                transform: translateY(${u * (options.y ?? 4)}px);
            `;
		},
	} satisfies TransitionConfig;
}

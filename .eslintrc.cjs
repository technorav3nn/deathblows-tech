/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"prettier",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],

	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
			rules: {
				"@typescript-eslint/no-unused-vars": [
					"warn",
					{
						varsIgnorePattern: "^\\$\\$(Props|Events|Slots|Generic)$",
					},
				],
				"@typescript-eslint/ban-types": [
					"error",
					{
						extendDefaults: true,
						types: {
							"{}": false,
						},
					},
				],

				"no-undef": "off",
			},
		},
	],
	rules: {
		"import/order": [
			"warn",
			{
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				warnOnUnassignedImports: true,
				"newlines-between": "always-and-inside-groups",
				pathGroups: [
					{
						pattern: "**/*.svelte",
						group: "unknown",
						position: "before",
					},
				],
			},
		],
		"import/no-unresolved": "off",
	},
	settings: {},
};

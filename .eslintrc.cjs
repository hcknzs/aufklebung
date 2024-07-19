/** @type {import('eslint').Linter.Config} */

module.exports = {
	env: { browser: true, es2020: true, node: true },
	extends: [
		"peerigon/presets/typescript-react.js",
		"plugin:canonical/recommended",
		"next/core-web-vitals",
		"plugin:storybook/recommended",
	],
	plugins: ["canonical"],
	root: true,
	rules: {
		"@typescript-eslint/no-non-null-assertion": "error",
		"canonical/destructuring-property-newline": "off",
		"canonical/export-specifier-newline": "off",
		"canonical/filename-match-regex": [
			2,
			{
				ignoreExporting: true,
				regex: "^[a-z0-9\\._\\-]+$",
			},
		],
		"canonical/import-specifier-newline": "off",
		"canonical/sort-keys": "off",
		"import/extensions": "off",
		"no-console": ["warn"],
		"react/prop-types": "off",
		"no-restricted-imports": [
			"error",
			{
				paths: [
					{
						name: "lodash",
						message:
							"Please use direct imports like 'lodash/merge' (treeshaking!)",
					},
				],
			},
		],
	},
};

const config = require("@linc.world/dot-files/.eslintrc.json");
module.exports = {
	plugins: ["import"],
	env: config.env,
	parserOptions: config.parserOptions,
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 6,
				ecmaFeatures: {
					jsx: true
				},

				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true
			},
			plugins: ["@typescript-eslint"],
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
				// TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
				"default-case": "off",
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
				"no-dupe-class-members": "off",
				// 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
				"no-undef": "off",

				// Add TypeScript specific rules (and turn off ESLint equivalents)
				"@typescript-eslint/no-angle-bracket-type-assertion": 1,
				"no-array-constructor": "off",
				"@typescript-eslint/no-array-constructor": 1,
				"@typescript-eslint/no-namespace": 2,
				"no-use-before-define": "off",
				"@typescript-eslint/no-use-before-define": [
					1,
					{
						functions: false,
						classes: false,
						variables: false,
						typedefs: false
					}
				],
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": [
					2,
					{
						args: "none",
						ignoreRestSiblings: true
					}
				],
				"no-useless-constructor": "off",
				"@typescript-eslint/no-useless-constructor": 1
			}
		}
	],
	rules: config.rules
};

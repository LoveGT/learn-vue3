module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'./.eslintrc-auto-import.json',
		'prettier'
	],
	overrides: [],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: false,
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'no-var': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'vue/multi-word-component-names': 'off'
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly'
	}
}

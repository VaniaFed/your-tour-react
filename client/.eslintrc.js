module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			files: ['*.stories.@(ts|tsx)'],
			rules: {
				'storybook/hierarchy-separator': 'error',
				'storybook/default-exports': 'off',
				quotes: 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: 'tsconfig.json',
	},
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		quotes: ['error', 'single'],
		'react/react-in-jsx-scope': 0,
		'import/no-webpack-loader-syntax': 0,
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
				'newlines-between': 'always',
			},
		],
		'@typescript-eslint/strict-boolean-expressions': 0,
		'@typescript-eslint/no-var-requires': 0,
	},
	plugins: ['react'],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['components', './src/components'],
					['containers', './src/containers'],
					['hooks', './src/hooks'],
					['actions', './src/actions'],
					['reducers', './src/reducers'],
					['constants.ts', './src/constants.ts'],
					['selectors', './src/selectors'],
					['types/', './src/types'],
					['static', './src/static'],
					['utils', './src/utils'],
					['lib', './src/lib'],
					['src', './src'],
					['sagas', './src/sagas'],
					['services', './src/services'],
				],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
};

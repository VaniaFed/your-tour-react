const path = require('path');

module.exports = {
	resolve: {
		alias: {
			src: path.resolve(__dirname, '../src/'),
			components: path.resolve(__dirname, '../src/components/'),
			hooks: path.resolve(__dirname, '../src/hooks/'),
			static: path.resolve(__dirname, '../src/static/'),
			actions: path.resolve(__dirname, '../src/actions'),
			reducers: path.resolve(__dirname, '../src/reducers/'),
			selectors: path.resolve(__dirname, '../src/selectors/'),
			utils: path.resolve(__dirname, '../src/utils/'),
			sagas: path.resolve(__dirname, '../src/sagas/'),
			lib: path.resolve(__dirname, '../src/lib/'),
			services: path.resolve(__dirname, '../src/services/'),
			'types/': path.resolve(__dirname, '../src/types/'),
			'constants.ts': path.resolve(__dirname, '../src/constants.ts'),
			'_vars.scss': path.resolve(__dirname, '../src/_vars.scss'),
		},
	},
};

module.exports = {
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		watchFiles: ['../src/*'],
		historyApiFallback: true,
		proxy: { '/api/**': { target: 'http://localhost:3001', secure: false } },
	},
};

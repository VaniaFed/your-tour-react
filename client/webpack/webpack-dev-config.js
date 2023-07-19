const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target: 'web',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env']],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg|ico|avif)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../', 'src/', 'index.html'),
			filename: 'index.html',
		}),
		new webpack.DefinePlugin({
			'process.env.API_URL': JSON.stringify(path.resolve(__dirname, '..', 'src')),
		}),
		new webpack.DefinePlugin({
			'STATIC_URL': JSON.stringify(path.resolve(__dirname, '..', 'src', 'static')),
		}),
	],
	mode: 'development',
};

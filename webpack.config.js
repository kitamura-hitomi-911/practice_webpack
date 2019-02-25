const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	entry: {
		common:'./src/js/common.js',
		style:'./src/sass/test.scss'
	},
	output: {
		path: `${__dirname}/dist`,
		filename: 'js/[name].js'
	},
	resolve: {
		alias: {
			'@': `${__dirname}/src/js`,
		},
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader:'css-loader',
						options: {
							url: false // url()を変換しない
						}
					},
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		new CopyWebpackPlugin(
				[
					{
						from: 'img',
						to: 'img',
					},
				],
				{ context: 'src' } // from の基準
		),
	],
};
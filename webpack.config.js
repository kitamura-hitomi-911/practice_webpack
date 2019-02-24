const path = require('path');

module.exports = {
	mode:'development',
	devtool: 'source-map',
	entry: ['./src/js/common.js'],
	output: {
		path: `${__dirname}/dist/js`,
		filename: 'common.js'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/js'),
		},
	}
};
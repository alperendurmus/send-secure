const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'send-secure.min.js',
		library: 'sendSecure',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: { esmodules: true } }]
						],
						plugins: [
							// Add any additional Babel plugins here
						]
					}
				}
			}
		]
	}
};
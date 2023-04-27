const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'send-secure.min.js',
		library: 'sendSecure',
	},
	mode: 'production'
};
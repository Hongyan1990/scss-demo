const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, './dist')
	},
	devtool: 'source-map',
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HTMLPlugin({template: path.join(__dirname, './src/index.template.html'), title: 'hello scss'}),
		new VueLoaderPlugin()
	]
}
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true
	},
	devtool: 'source-map',
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: ['babel-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader','postcss-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: true
						}
					}, 
					'css-loader', 
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024 * 30,
							fallback: 'file-loader'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HTMLPlugin({template: path.join(__dirname, './src/index.template.html'), title: 'hello scss'}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
}
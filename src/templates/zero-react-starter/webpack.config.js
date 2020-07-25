const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');

// variables
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	context: sourcePath,
	entry: {
		app: './index.tsx',
	},
	output: {
		path: outPath,
		filename: isProduction ? '[contenthash].js' : '[hash].js',
		chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx', 'jsx'],
		// Fix webpack's default behavior to not load packages with jsnext:main module
		// (jsnext:main directs not usually distributable es6 format, but es6 sources)
		mainFields: ['module', 'browser', 'main'],
		alias: {
			app: path.resolve(__dirname, 'src/'),
			components: path.resolve(__dirname, 'src/components'),
			hooks: path.resolve(__dirname, 'src/hooks'),
			assets: path.resolve(__dirname, 'src/assets'),
		},
	},
	module: {
		rules: [
			// .ts, .tsx
			{
				test: /\.(tsx?|jsx?)$/,
				use: [
					!isProduction && {
						loader: 'babel-loader',
						options: { plugins: ['react-hot-loader/babel'] },
					},
					'ts-loader',
				].filter(Boolean),
			},
			// css
			{
				test: /\.css$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: !isProduction,
							importLoaders: 1,
							modules: {
								localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('postcss-import')({ addDependencyTo: webpack }),
								require('postcss-url')(),
								require('postcss-preset-env')({
									/* use stage 2 features (defaults) */
									stage: 2,
								}),
								require('postcss-reporter')(),
								require('postcss-browser-reporter')({
									disabled: isProduction,
								}),
								require('postcss-flexbugs-fixes'),
							],
						},
					},
				],
			},
			// static assets
			{ test: /\.html$/, use: 'html-loader' },
			{ test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
			{
				test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
		],
	},
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					filename: isProduction ? 'vendor.[contenthash].js' : 'vendor.[hash].js',
					priority: -10,
				},
			},
		},
		runtimeChunk: true,
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
			DEBUG: false,
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[hash].css',
			disable: !isProduction,
		}),
		new HtmlWebpackPlugin({
			template: '../public/index.html',
			minify: {
				minifyJS: true,
				minifyCSS: true,
				removeComments: true,
				useShortDoctype: true,
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
			},
			meta: {
				title: package.name,
				description: package.description,
				keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
			},
		}),
	],
	devServer: {
		contentBase: sourcePath,
		hot: true,
		inline: true,
		historyApiFallback: {
			disableDotRule: true,
		},
		stats: 'minimal',
		clientLogLevel: 'warning',
	},
	// https://webpack.js.org/configuration/devtool/
	devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
	node: {
		// workaround for webpack-dev-server issue
		// https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
		fs: 'empty',
		net: 'empty',
	},
};

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');


const config = {
	entry: APP_DIR + '/app/index.js',

	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
	},

	devServer: {
		contentBase: APP_DIR + '/app',
		historyApiFallback: true
	},

	resolve: {
		modules: ['node_modules', 'src/app/']
	},

	module: {
		loaders: [
			{
				test: /\.js?/,
				include: [APP_DIR, 'node_modules'],
				loader: 'babel-loader',
			}, {
				test: /\.css?/,
				include: ['node_modules'],
				loader: ['style-loader', 'css-loader'],
			}, {
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			}, {
				test: /\.ico$/,
				loader: 'file-loader?name=[name].[ext]'
			}, {
	      test: /\.(jpg|png|gif)$/,
	      loaders: [
	        'file-loader',
	        {
	          loader: 'image-webpack-loader',
	          query: {
	          	mozjpeg: {
	          		progressive: true
	          	},
	            optipng: {
	            	optimizationLevel: 7
	            },
	            gifsicle: {
	            	interlaced: false
	            },
	            pngquant: {
	              quality: '65-90',
	              speed: 4,
	            },
	          },
	        },
	      ],
	    }, {
	    	test: /assets\/js\/.+\.js?$/,
	    	loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
	    }, {
	    	test: /bootstrap.+\.js?$/,
	    	loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
	    }
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: APP_DIR + '/index.html',
			inject: 'body',
		})
	]
}

module.exports = config

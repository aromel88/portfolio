var webpack = require("webpack");
var path = require('path');
//require("url-loader?prefix=img/!./bg.jpg");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve('./'),
		filename: "bundle.js",
		publicPath: "assets"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["env", "latest"]
				}
			},
			{
				test: /\.css$/,
        exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
      {
				test: /\.scss$/,
        exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			},
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader?name=/img/[name].[ext]'
      }
		]
	}
}

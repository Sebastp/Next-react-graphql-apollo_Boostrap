require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')

const configureWebpack = (config, { dev }) => {
	config.plugins = config.plugins || []

	config.plugins.push(
		// Read the .env file
		new Dotenv({
			path: path.join(__dirname, '.env'),
			systemvars: true
		})
  );
	
	
	config.module.rules.push({
		test: /\.(graphql|gql)$/,
		exclude: /node_modules/,
		loader: 'graphql-tag/loader'
	})

	if (dev) {
		config.module.rules.push({
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'eslint-loader',
		})
	}

  return config;
};


module.exports = withSass({
	webpack: configureWebpack
})
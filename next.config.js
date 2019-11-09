require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')


const configureWebpack = config => {
	config.plugins = config.plugins || []

	config.plugins.push(
		// Read the .env file
		new Dotenv({
			path: path.join(__dirname, '.env'),
			systemvars: true
		})
  );

  return config;
};


module.exports = withSass({
	cssModules: true,
	webpack: configureWebpack
})
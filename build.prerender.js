const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = (api, options) => {
	api.registerCommand('build:prerender', async (args) => {
		let staticDir = path.join(__dirname, 'dist');
		let outputDir = path.join(__dirname, 'prerender');
		let routes = ['/'];

		api.registerCommand('build:prerender', async (args) => {
			api.chainWebpack(config => {
				config.plugin('prerender').use(PrerenderSPANPlugin, [{
					staticDir,
					outputDir,
					routes
				}]);
			});
		})

		await api.service.run('build');
	})
}

module.exports.defaultModes = {
	'build:prerender': 'production'
}
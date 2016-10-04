'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (config) {

	var app = (0, _express2.default)();
	var server = _http2.default.createServer(app);
	var graphqlHttpConfig = function graphqlHttpConfig(schema) {
		return {
			schema: schema,
			pretty: true,
			graphiql: true,
			context: { baseUrl: 'http://localhost:3010' }
		};
	};

	//app.use('/graphql', graphqlHttp(graphqlHttpConfig(schema)));

	app.use(_express2.default.static(config.webServer.folder));

	server.listen(config.webServer.port, function (err) {

		if (err) {
			console.error(err);
			return;
		}

		console.log('web server running on port ' + config.webServer.port + '\nplease do not close this terminal window\nplease use a new terminal window to run additional commands');
	});
};

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=server.js.map
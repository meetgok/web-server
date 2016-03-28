var middleware = {
	requireAuthentication : function(req, res, next) {
		console.log('private');
		next();
	},
	logger : function(req, res, next) {
		var date = new Date().toString();
		console.log(req.method + ' ' + req.originalUrl + ' ' + date);
		next();
	}
};

module.exports = middleware;
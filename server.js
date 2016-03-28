var express = require('express');
var app = express();
var PORT = 3000;
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

app.use(middleware.requireAuthentication);
app.use(middleware.logger);
	//middleware ilgili linke girmeden hemen önce
	// yapılmak istenenleri gireceğimiz yer.
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('server started on port ' + PORT);
});
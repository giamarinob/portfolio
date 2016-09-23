var express = require('express'),
    app     = express();

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/imgs', express.static(__dirname + '/public/imgs'));
app.use('/docs', express.static(__dirname + '/public/docs'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(process.env.PORT || 3000, function() {
	console.log("I am listening...");
});
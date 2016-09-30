var express = require('express'),
    app     = express(),
    url     = "https://maps.googleapis.com/maps/api/js?key=" + process.env.GOOGLE_KEY + "&callback=initMap";

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/imgs', express.static(__dirname + '/public/imgs'));
app.use('/docs', express.static(__dirname + '/public/docs'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function(req, res){
	res.render('index', {url: url});
});

app.listen(process.env.PORT || 3000, function() {
	console.log("I am listening...");
	console.log("GOOGLE_KEY is..." + process.env.GOOGLE_KEY);
});
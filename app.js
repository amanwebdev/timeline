var express = require('express');
var app = express();
var path = require('path');
//var logger = require('morgan');
var bodyParser = require('body-parser');

//app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text({
   type: 'text/plain'
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/api/achievements', function(request, response) {
    //console.log(JSON.parse(request.body));
    //achievements.push(JSON.parse(request.body));
    console.log("received post request"+request.body);
    response.send("success!");
});
app.get('/api/achievements', function(request, response) {
    console.log("Requested achievements");
    //achievements.push(JSON.parse(request.body));
    response.send("success!");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

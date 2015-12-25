var express = require('express');
var app = express();
var path = require('path');
//var logger = require('morgan');


//app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

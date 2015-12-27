var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var db = require('./db');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var taskRoute = require('./routes/track');
var checkListRoute = require('./routes/taskList');


app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text({
    type: 'text/plain'
}));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.use('/track', taskRoute);
app.use('/checklist', checkListRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Make our db accessible to our router
app.use(function(req, res, next) {
    req.db = db;
    next();
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
    	if(err)console.log(err);
        res.status(err.status || 500).send('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500).send('error', {
        message: err.message,
        error: {}
    });
});



// Connect to MySQL on start
db.connect(db.MODE_PRODUCTION, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {
        app.listen(3001, function() {
            console.log('Listening on port 3000...')
        })
    }
})


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

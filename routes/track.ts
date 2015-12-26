/// <reference path="../typings/tsd.d.ts" />

var db = require('../db.js')

var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
    console.log("received post request" + request.body);
    createTask(request.body);
    response.send("success!");
});
router.get('/taskList', function(request, response) {
    console.log("received get request");
    getTaskList(response);
    // response.send("success!");
});
module.exports = router;

function createTask(task) {
    var taskObj = JSON.parse(task);
    console.log(JSON.parse(task));
    db.get(db.WRITE, function(err, connection) {
        if (err) console.log(err.message);
        var query = "insert into task values" +
            "('" + taskObj.name + "','" + taskObj.status + "','" + taskObj.startTime + "','" + taskObj.finishTime + "','" + taskObj.comments + "')";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
            //done(null, result.insertId)
        });
    })
}

function getTaskList(response){
	db.get(db.READ1, function(err, connection) {
		if (err) console.log(err.message);
		var query = "select * from task;";
		connection.query(query, function(err, result) {
			if (err) console.log(err.message);
            response.json(result);
			console.log(result[0].name);
			console.log(result[1].name);
		});
	});
}

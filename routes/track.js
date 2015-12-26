var db = require('../db.js')

var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
    console.log("received post request"+request.body);
    createTask(request.body);
    response.send("success!");
});

module.exports = router;

function createTask(task){
	var taskObj = JSON.parse(task);
	console.log(JSON.parse(task));
	db.get(db.WRITE,function(err,connection){
		if(err)console.log(err.message);
		var query = "insert into task values"+
		"('"+taskObj.name+"','"+taskObj.status+"','"+taskObj.startTime+"','"+taskObj.finishTime+"','"+taskObj.comments+"')";
		connection.query(query,function(err,result){
			if (err) console.log(err.message);
    		//done(null, result.insertId)
		});
	})

	db.fixtures({'task':"+'"+taskObj+"'"},function(err){
		console.log("Some error occured!");
		if(err)console.log(err.message);
	});
}
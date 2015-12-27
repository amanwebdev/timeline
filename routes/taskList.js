var db = require('../db.js')

var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
    console.log("received  request for saving checklist" + request.body);
    saveCheckList(request.body);
    response.send("success!");
});
function saveCheckList(data){
    console.log("saving checklist"+data);
	var checkListObj = JSON.parse(data);
	
	db.get(db.WRITE, function(err, connection) {
        if (err) console.log(err.message);
        var query = "insert into checklist (taskId,name) values" +
            "('" + checkListObj.taskId + "','" + checkListObj.name  + "')";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
        });
    })
}

module.exports = router;
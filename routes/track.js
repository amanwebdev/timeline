//var db = require('../db.js')

var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(request, response) {
    console.log("received post request" + request.body);
    createTask( JSON.parse(request.body),response);
    //response.send("success!");
});
router.get('/taskList', function(request, response) {
    console.log("received get request");
    //getTaskList(response);
    // response.send("success!");
});
router.get('/user',function(request,reponse){
    models.User.create({
        username:'admin',
        password:'pass'
    }).then(function(user){
        reponse.json(user);
    }).catch(function(error){
        console.log(error);
    });
});
module.exports = router;

function createTask(task,response) {
    models.Task.create({
        name: task.name,
        status: task.status,
        startTime: task.startTime,
        finishTime: task.finishTime,
        comments: task.comments,
        UserUsername:'admin'
    }).then(function(task) {
        //response.json(task);
    })
}
/*function createTask(task) {
    var taskObj = JSON.parse(task);
    console.log(JSON.parse(task));
    db.get(db.WRITE, function(err, connection) {
        if (err) console.log(err.message);
        var query = "insert into task (name,status,startTime,finishTime,comments) values" +
            "('" + taskObj.name + "','" + taskObj.status + "','" + taskObj.startTime + "','"
             + taskObj.finishTime + "','" + taskObj.comments + "')";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
            //done(null, result.insertId)
        });
    })
}*/

function getTaskList(response) {
    db.get(db.READ1, function(err, connection) {
        if (err) console.log(err.message);
        var query = "select * from task;";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
            addListToTask(result, response);
            console.log(result[0].name);
            console.log(result[1].name);
        });
    });
}

function addListToTask(result, response) {
    result.map(t => {
        var task = t;
        task.test = 'a';
        // task.checkList={"id":2,"taskId":1,"name":"first checklist"};
        getCheckList(t.id);
        return task;
    });
    console.log("added list to task" + JSON.stringify(result));
    response.json(result);
}

function getCheckList(task) {
    var checkList;
    console.log("retreiving check list for task id:" + task.id);
    db.get(db.READ1, function(err, connection) {
        if (err) console.log(err.message);
        var query = "select * from checklist where taskId=" + task.id + ";";
        connection.query(query, function(err, result) {
            if (err) console.log("some error" + err.message);
            task.checkList = result[0];
            return;
        });
    });
    console.log("checklist for task" + JSON.stringify(checkList));
    return JSON.stringify(checkList);
}

//var db = require('../db.js')

var express = require('express');
var router = express.Router();
var models = require('../models');
var moment = require('moment');

router.post('/', function(request, response) {
    console.log("create request made with body:" + JSON.stringify(request.body));
    createTask(request.body, response);
});
router.get('/taskList', function(request, response) {
    console.log("received get request");
    getTaskList(response);
});
router.get('/user', function(request, reponse) {
    models.User.create({
        username: 'admin',
        password: 'pass'
    }).then(function(user) {
        reponse.json(user);
    }).catch(function(error) {
        console.log(error);
    });
});
module.exports = router;

function createTask(task, response) {
    console.log("time estimate:" + task.timeEstimate.hours + "," + task.timeEstimate.minutes);
    models.Task.create({
        name: task.name,
        status: task.status,
        startTime: moment(task.startTime),
        finishTime: moment(task.finishTime),
        comments: task.comments,
        hours: task.timeEstimate.hours,
        minutes: task.timeEstimate.minutes,
        user_username: 'admin'
    }).then(function(task) {
        response.json(task);
    })
}


function getTaskList(response) {
    models.Task.findAll({
        where: {
            user_username: 'admin'
        }
    }).then(function(tasks) {
        response.json(tasks);
    });
}

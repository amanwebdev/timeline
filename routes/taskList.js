var db = require('../db.js')

var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(request, response) {
    console.log("received  request for saving checklist" + request.body);
    saveCheckList(JSON.parse(request.body,response));
    response.send("success!");
});
router.get('/:id', function(request, response) {
    console.log("received  get request for checklist"+request.params.id);
   // response.send("success!");
    getCheckList(request.params.id,response);
});
router.get('/', function(request, response) {
    response.send("success!");
    //getCheckList(response);
});

function saveCheckList(checkList,response){
    models.CheckList.create({
        name:checkList.name,
        TaskId:checkList.taskId
    }).then(function(){
        models.CheckList.findOrCreate(
            {where:{name:checkList.name,TaskId:checkList.taskId}})
        .spread(function(list, created) {
            if(created){
                for(item in checkList.itemList){
                    saveListItem(item,checkList.id);
                }
                response.send("success!");
            }
        });
    });
}
function saveListItem(listItem,clId){
    models.ListItem.create({
        text:listItem.text,
        done:listItem.done,
        checkListId:clId
    }).then(function(){
        models.ListItem.findOrCreate(
            {where:{text:listItem.text,checkListId:clId}}
        );
    });
}
module.exports = router;
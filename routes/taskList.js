var db = require('../db.js')

var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
    console.log("received  request for saving checklist" + request.body);
    saveCheckList(request.body);
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
function saveCheckList(data){
    console.log("saving checklist"+data);
	var checkListObj = JSON.parse(data);
	var checkListId;
	db.get(db.WRITE, function(err, connection) {
        if (err) console.log(err.message);
        var query = "insert into checklist (taskId,name) values" +
            "('" + checkListObj.taskId + "','" + checkListObj.name  + "')";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
            console.log(result.insertId);
            saveItems(checkListObj.itemList,result.insertId);
        });
    })
    getCheckList(1);
    
}
function saveItems(items,checkListId){
    for(var i=0;i<items.length; i++){saveItem(items[i],checkListId)}
}
function saveItem(item,checkListId){
    console.log("saving list item:"+JSON.stringify(item));
    db.get(db.WRITE, function(err, connection) {
        if (err) console.log(err.message);
        var query = "insert into listItem (checklistId,text,done) values" +
            "('" + checkListId + "','" + item.text + "','" + item.done  + "')";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
        });
    });
}
function getCheckList(taskId,response){
    var checkList;
    console.log("retreiving check list for task id:"+taskId);
    db.get(db.READ1, function(err, connection) {
        if (err) console.log(err.message);
        var query = "select * from checklist where taskId="+taskId+";";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
            console.log(result[0]);
            checkList = result[0];
            console.log("experimenting"+JSON.stringify(checkList));
            getListItems(result[0],response);
        });
    });
}
function getListItems(checkList,response){
    console.log("retreiving  list items for list id:"+checkList.id);
    db.get(db.READ1, function(err, connection) {
        if (err) console.log(err.message);
        var query = "select * from listItem where checklistId="+10+";";
        connection.query(query, function(err, result) {
            if (err) console.log(err.message);
            console.log(result);
            checkList.itemList=[];
            if(result){
                for(var i=0;i<result.length; i++){checkList.itemList.push(result[i])}
            }
            console.log("saved items in checkList:"+JSON.stringify(checkList));
            response.json(checkList);
        });
    });
}
module.exports = router;
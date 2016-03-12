var db = require('../db.js')

var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(request, response) {
    console.log("received  request for saving checklist" + JSON.stringify(request.body));
    saveCheckList(request.body, response);
});
router.get('/:id', function(request, response) {
    console.log("received  get request for checklist" + request.params.id);
    getCheckList(request.params.id)
        .then(function(list) {
            console.log("List found:"+list);
            response.json(list);
        });
});
router.get('/items/:id', function(request, response) {
    console.log("received  get request for list items" + request.params.id);
    getListItems(request.params.id)
        .then(function(items){
            response.json(items)
        });
});
router.get('/', function(request, response) {
    response.send("success!");
    //getCheckList(response);
});

function getCheckList(task_id) {
    return models.CheckList.findOne({
        where: {
            task_id: task_id
        }
    });
}
function getListItems(list_id){
    return models.ListItem.findAll({
        where : {
            check_list_task_id : list_id
        }
    });
}


function saveCheckList(checkList, response) {
    models.CheckList.upsert({
        id: checkList.id,
        name: checkList.name,
        task_id: checkList.task_id
    }).then(function(created) {
        response.json(created);
    });
}

function bulkSaveItems(itemList, clId, response) {

    models.ListItem.bulkCreate(
        itemList.map(function(item) {
            return {
                text: item.text,
                done: item.done,
                CheckListId: clId
            };
        }), { ignoreDuplicates: true }).then(function(items) {
        response.send("success2!");
    }).error(function(e) {
        console.error("error saving list items:" + e.message);
    });
}

function saveListItem(listItem, clId) {
    models.ListItem.create({
        text: listItem.text,
        done: listItem.done,
        checkListId: clId
    }).then(function() {
        models.ListItem.findOrCreate({ where: { text: listItem.text, checkListId: clId } });
    });
}
module.exports = router;

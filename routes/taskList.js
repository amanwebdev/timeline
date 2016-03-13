var db = require('../db.js')
var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require("bluebird");

router.post('/', function(request, response) {
    console.log("received  request for saving checklist" + JSON.stringify(request.body));
    saveCheckList(request.body, response)
        .then(function(saved) {
            console.log("Saved check list:" + JSON.stringify(saved));
            if (saved) {
                getCheckList(request.body.task_id)
                    .then(function(list) {
                        console.log("Sending saved list:" + list);
                        response.json(list);
                    });
            }
        });
});
//TODO: Ideally request with undefined task id should not be made,
//      but still such request should be handled.
router.get('/:id', function(request, response) {
    console.log("received  get request for checklist" + request.params.id);
    getCheckList(request.params.id)
        .then(function(list) {
            console.log("List found:" +(list));
            if(!list){
                list = { name : "Check list...", task_id : request.params.id };
            }            
            response.json(list);
        });
});
router.post('/items', function(request, response) {
    console.log("Saving items :" + JSON.stringify(request.body));
    saveItemList(request.body)
        .then(function(saved) {
            console.log("Saved items:" + JSON.stringify(saved));
            getListItems(request.body.check_list_task_id)
                .then(function(items) {
                    console.log("Sending saved items:" + items);
                    response.json(items);
                });
        });
});
router.post('/items/delete', function(request, response) {
    console.log("Deleting item : " + JSON.stringify(request.body));
    deleteItem(request.body)
        .then(function(item) {
            console.log("Deleted item : " + JSON.stringify(item));
            getListItems(request.body.check_list_task_id)
                .then(function(items) {
                    console.log("Sending updated item list, after deletion:" + items);
                    response.json(items);
                });
        });
});
router.get('/items/:id', function(request, response) {
    console.log("received  get request for list items" + request.params.id);
    getListItems(request.params.id)
        .then(function(items) {
            response.json(items)
        });
});


function getCheckList(task_id) {
    return models.CheckList.findOne({
        where: {
            task_id: task_id
        }
    });
}

function getListItems(list_id) {
    return models.ListItem.findAll({
        where: {
            check_list_task_id: list_id
        }
    });
}


function saveCheckList(checkList, response) {
    return models.CheckList.upsert({
        id: checkList.id,
        name: checkList.name,
        task_id: checkList.task_id
    });
}

function saveItemList(itemList) {
    var items = [];
    itemList.forEach(function(item) {
        items.push(saveItem(item));
    })
    return Promise.all(items);
}

function saveItem(item) {
    return models.ListItem.upsert({
        id: item.id,
        text: item.text,
        done: item.done,
        check_list_task_id: item.check_list_task_id
    });
}

function deleteItem(item, clId) {
    return models.ListItem.destroy({
        where: {
            id: item.id
        }
    });
}

function bulkCreateItems(itemList, clId, response) {

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
module.exports = router;

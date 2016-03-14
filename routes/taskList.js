var db = require('../db.js')
var express = require('express');
var router = express.Router();


var listQuery = require('./db_util/list_query.js');

router.post('/', function(request, response) {
    console.log("received  request for saving checklist" + JSON.stringify(request.body));
    listQuery.saveCheckList(request.body, response)
        .then(function(saved) {
            console.log("Saved check list:" + JSON.stringify(saved));
            if (saved) {
                listQuery.getCheckList(request.body.task_id)
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
    listQuery.getCheckList(request.params.id)
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
    listQuery.saveItemList(request.body.items)
        .then(function(saved) {
            console.log("Saved items:" + JSON.stringify(saved));
            listQuery.getListItems(request.body.list_id)
                .then(function(items) {
                    console.log("Sending saved items:" + items);
                    response.json(items);
                });
        });
});
router.post('/items/delete', function(request, response) {
    console.log("Deleting item : " + JSON.stringify(request.body));
    listQuery.deleteItem(request.body)
        .then(function(item) {
            console.log("Deleted item : " + JSON.stringify(item));
            listQuery.getListItems(request.body.check_list_task_id)
                .then(function(items) {
                    console.log("Sending updated item list, after deletion:" + items);
                    response.json(items);
                });
        });
});
router.get('/items/:id', function(request, response) {
    console.log("received  get request for list items" + request.params.id);
    listQuery.getListItems(request.params.id)
        .then(function(items) {
            response.json(items)
        });
});

module.exports = router;

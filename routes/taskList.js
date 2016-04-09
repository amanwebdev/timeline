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

//TODO:
router.post('/item', function(request,response){

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
router.get('/progress/:id',function(request, response){
    console.log("received get request for progress:"+request.params.id);
    listQuery.checkProgress(request.params.id)
        .then(function(result){
            response.json(result[0]);
        });
})
router.get('/time_progress/:id',function(request, response){
    console.log("received get request for time progress:"+request.params.id);

        listQuery.getTask(request.params.id).then(function(task) {
       var startTime = task.startTime.getTime();
       var finishTime = task.finishTime.getTime();

       var difference_ms = startTime - finishTime;

       var estimate = 1000 * task.hours * task.minutes * 60;
       var progress = (difference_ms / estimate ) * 100;
       progress = progress && progress > 0 ? progress : 0;
       response.json({"progress":progress})
       });

})
module.exports = router;

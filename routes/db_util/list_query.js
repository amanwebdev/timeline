var models = require('../../models');
var Promise = require("bluebird");

exports.getCheckList = function(task_id) {
    return models.CheckList.findOne({
        where: {
            task_id: task_id
        }
    });
}

exports.getListItems = function(list_id) {
    return models.ListItem.findAll({
        where: {
            check_list_task_id: list_id
        }
    });
}


exports.saveCheckList = function(checkList, response) {
    return models.CheckList.upsert({
        id: checkList.id,
        name: checkList.name,
        task_id: checkList.task_id
    });
}

exports.saveItemList = function(itemList) {
    var items = [];
    itemList.forEach(function(item) {
        items.push(saveItem(item));
    })
    return Promise.all(items);
}

exports.saveItem = function(item) {
    return models.ListItem.upsert({
        id: item.id,
        text: item.text,
        done: item.done,
        check_list_task_id: item.check_list_task_id
    });
}

exports.deleteItem = function(item, clId) {
    return models.ListItem.destroy({
        where: {
            id: item.id
        }
    });
}

exports.bulkCreateItems = function(itemList, clId, response) {

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
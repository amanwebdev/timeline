
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
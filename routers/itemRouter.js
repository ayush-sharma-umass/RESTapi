var router = require('express').Router();
var Item = require('../models/item');
var errorHandler = require('../errorHandler/errorHandler');
var parser = require('body-parser').json();

router.get('/items/', function(req, response) {
    Item.getItems(function(err, items) {
        if(err) {
            if (item == null) {
                response = errorHandler.noItemFound(err, response);
            }
            else throw err;
        }
        response.json(items);
    });
});

router.get('/items/:_id', function(req, response) {
    Item.getItemById(req.params._id, function(err, item){
        if (err) {
            if (!item) {
                response = errorHandler.noItemFound(err, response);
            }
            else throw err;
        }
        else {
            response.json(item);
        }
    });
});

router.post('/items', function(req, response) {
    if (isJsonString(req.body)) {
        response = errorHandler.invalidJSONStringPOST(response);
    }
    else {
        var item = req.body;
        Item.addItem(item, function(err, item) {
            if (err) {
                throw err;
            }
            else {
                response.json(item);
            }
        });
    }
});

router.put('/items/:_id', function(req, response) {
    if (isJsonString(req.body)) {
        response = errorHandler.invalidJSONStringPUT(response);
    }
    else {
        var id = req.params._id;
        var item = req.body;
        Item.updateItem(id, item, {}, function(err, item) {
            if (err) {
                throw err;
            }
            response.json(item);
        });
    }
});

router.delete('/items/:_id', function(req, response) {
    var id = req.params._id;
    Item.deleteItem(id, function(err, item){
        if (err) {
            if (item == null) {
                response = errorHandler.noItemFound(err, response);
            }
            else throw err;
        }
        else {
            response.json(item);
        }
    });
});

function isJsonString(str) {
    try {
        parser.json(str);
    } catch (e) {
        return false;
    }
    return true;
}
module.exports = router;

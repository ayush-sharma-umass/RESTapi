var router = require('express').Router();
Item = require('../models/item');


router.get('/items/', function(req, response) {
    Item.getItems(function(err, items) {
        if(err) {
            throw err;
        }
        response.json(items);
    });
});

router.get('/items/:_id', function(req, response) {
    Item.getItemById(req.params._id, function(err, item){
        if (err) {
            throw err;
        }
        response.json(item);
    });
});

router.post('/items', function(req, response) {
    var item = req.body;
    Item.addItem(item, function(err, item) {
        if (err) {
            throw err;
        }
        response.json(item);
    });
});

router.put('/items/:_id', function(req, response) {
    var id = req.params._id;
    var item = req.body;
    Item.updateItem(id, item, {}, function(err, item) {
        if (err) {
            throw err;
        }
        response.json(item);
    });
});

router.delete('/items/:_id', function(req, response) {
    var id = req.params._id;
    Item.deleteItem(id, function(err, item){
        if (err) {
            throw err;
        }
        response.json(item);
    });
});

module.exports = router;

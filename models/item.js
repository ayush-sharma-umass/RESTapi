var mongoose = require('mongoose');

// Schema for items

var itemSchema = mongoose.Schema({
    date_created: {
        type: Date,
        default: Date.now
    }

}, {strict: false});

var Item = module.exports = mongoose.model('Item', itemSchema);

// get items

module.exports.getItems = function(callback, limit) {
    Item.find(callback).limit(limit);
}

module.exports.getItemById = function(id, callback) {
    Item.findById(id, callback);
}

// post items

module.exports.addItem = function(item, callback) {
    Item.create(item, callback);
}

// update item

module.exports.updateItem = function(id, item, options, callback) {
    var query = {_id: id};
    var update = item;
    Item.findOneAndUpdate(query, update, options, callback);
}

// delete item

module.exports.deleteItem = function(id, callback) {
    var query = {_id: id};
    Item.remove(query, callback);
}

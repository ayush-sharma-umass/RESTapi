var errors = {}
errors.redirect = function(res) {
    res.status(404).send({error_code: "404.a", error_message: "Please go to api/items :("});
    return res;
}

errors.noItemFound = function(err, res) {
    res.status(404).send({error_code: "404.b", error_message: "No Queried Item found :("});
    return res;
}

errors.invalidJSONStringPOST = function(res) {
    res.status(400).send({error_code: "400.a", method: "POST", error_message: "Invalid JSON String in Query :("});
    return res;
}

errors.invalidJSONStringPUT = function(err, res) {
    res.status(400).send({error_code: "400.a", method: "PUT", error_message: "Invalid JSON String in Query :("});
    return res;
}
module.exports = errors;

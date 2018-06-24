let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(vals, cb) {
        orm.create('burgers', vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger-controllers.js).
module.exports = burger;
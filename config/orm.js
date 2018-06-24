let connection = require("../config/connection.js");

let orm = {

    selectAll: function(table, cb){
        let query = `SELECT * FROM ${table};`;
        connection.query(query,function (err,res) {
            cb(res);
        })
    },

    insertOne: function (table, name, cb) {
        let query = `INSERT INTO ${table} (burger_name) values ('${name}')`;
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
           cb(res);
        });
    } ,

    updateOne: function (table, id, cb) {
        let query = `UPDATE ${table} SET devoured = 1 WHERE id = ${id}`;
        connection.query(query, function (err, res) {
            console.log(`result from query ${res}`);
            cb(res);
        });
    },
};

module.exports = orm;


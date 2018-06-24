var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let obj = {
            burgers: data
        };
        res.render("index", obj);
    });
});

router.post("/", function(req, res) {
    let burger = req.body.burger_name;
    burger.insertOne(burger, function (data) {
        let obj = {
            burgers: data
        };
        res.render('index', obj);
    });
});

router.put("/", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({
        sleepy: req.body.sleepy
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
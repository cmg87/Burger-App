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
    let newburger = req.body.burger_name;
    console.log(newburger);
    burger.insertOne(newburger, function (data) {
        let obj = {
            burgers: data
        };
        res.render('index', obj);
    });
});

router.put('/', function (req,res) {
    let id = req.body.id;
    console.log(`${id} at controller`);
    burger.updateOne(id,function (data) {
        let obj = {
            burgers :data,
        };
        res.render('index', obj);
    })
});

// Export routes for server.js to use.
module.exports = router;


// need to work on the put statement to update the value of devoured to true and send back data also add that ajax and jquery to html
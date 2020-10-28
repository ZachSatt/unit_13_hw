const express = require("express");

const router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.select(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(["burger_name"], [req.body.burger_name], function(result) {
        res.redirect("/burgers");
    });
});


router.put("/burgers/update/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(req.body);
    console.log("put route");
    burger.update(
        req.params.id,
        req.body.devoured,
        function(data) {
            res.end();
        });
});

module.exports = router;
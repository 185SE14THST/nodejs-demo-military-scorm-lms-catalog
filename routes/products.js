var express = require('express');
var router = express.Router();

// define mongojs at the event level
var mongodb = require('mongodb')
var mongojs = require('mongojs')
var db = mongojs('local', ['products'])
    db.on('error', function (err) {
        console.log('database error', err);
    });
    db.on('connect', function () {
        console.log('database connected');
    });

    /* GET products listing. */
    router.get('/', function (req, res) {
        // res.send('respond with a products resource');
        console.log('Fetching Products...');
        db.products.find(function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                console.log('Sending products...');
                res.json(docs);
            }
        });
    });

    /* GET product listing. */
    router.get('/:id', function (req, res) {
        // res.send('respond with a products resource');
        console.log('Fetching Products...');
        db.products.findOne({
            _id:mongojs.ObjectId(req.params.id
        )},
            function (err, doc) {
            if (err) {
                res.send(err);
            } else {
                console.log('Sending products...');
                res.json(doc);
            }
        });
    });

module.exports = router;
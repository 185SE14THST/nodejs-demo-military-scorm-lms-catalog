var express = require('express');
var router = express.Router();

/* GET product item. */
router.get('/', function (req, res) {
    res.send('respond with one resource from a JSON string');
    //res.render('p',
    //    {
    //        title: 'Express',
    //        subtitle: 'Express subtitle',
    //    });
});

module.exports = router;
var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('<h1>List Page</h1>');
});


module.exports = router;
var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('<h2>Add Page</h2>');
});

module.exports = router;
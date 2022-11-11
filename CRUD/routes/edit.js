var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('<h1>Edit Page</h1>');
});

router.get('/:id', function(req, res) {
    res.send('<h1>Edit Page com id '+req.params.id+'</h1>');
});

module.exports = router;
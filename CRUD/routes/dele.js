var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('<h2>Delete Page</h2>');
});

router.get('/:id', function(req, res) {
    res.send('<h1>Delete Page com id '+req.params.id+'</h1>');
});

module.exports = router;
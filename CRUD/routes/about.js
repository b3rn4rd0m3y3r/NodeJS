var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('<h2>Index Page</h2>');
});

router.get('/about', function(req, res) {
    res.send('<h1>About Page</h1><p>This program do this ...</p>');
});

module.exports = router;
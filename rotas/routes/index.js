var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Index Page');
});

router.get('/about', function(req, res) {
    res.send('<h1>About Page</h1><p>Paragraph 1</p>');
});

module.exports = router;
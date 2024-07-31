var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('NeetCode - Save & Share your snippets..')
})

module.exports = router;
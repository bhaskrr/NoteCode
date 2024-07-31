var express = require('express');
var router = express.Router();
const Snippet = require('../models/Snippet')

router.post('/create/new', async function (req, res, next) {
  const snippet = new Snippet(req.body);
  const savedSnippet = await snippet.save();
  res.send(savedSnippet._id);
})

router.get('/:id', async function (req, res, next) {
  const id = req.params.id;
  try {
    const snippet = await Snippet.findById(id);
    if (!snippet) {
      return res.status(404).send({ error: 'Snippet not found' });
    }
    res.send(snippet);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

router.get('/', function (req, res, next) {
  res.send('In this route, API requests to this site are handled...');
})

module.exports = router;

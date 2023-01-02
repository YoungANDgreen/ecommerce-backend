const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include: [Product]})
  .then(tags => {
    res.json(tags)
  })
  .catch(err => {
    console.log(err)
  })
});

router.get('/api/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.create(req.body)
  .then(tag => {
    res.json(tag)
  })
  .catch(err => {
    console.log(err)
  })
});

router.post('/api/tags', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(tags => {
    res.json(category)
  })
  .catch(err => {
    console.log(err)
  })
});

router.put('/api/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {where: {id: req.params.id}})
  .then(tags => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err)
  })
});

router.delete('/api/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: {id: req.params.id}})
  .then(tag => {
    res.json(200)
  })
});

module.exports = router;

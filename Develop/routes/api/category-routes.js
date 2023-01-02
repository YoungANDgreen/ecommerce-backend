const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/api/categories', (req, res) => {
  // Finds all categories, returns the response in JSON and throws error if one occurs.
  Category.findAll({include: [Product]})
  .then(categories => {
    res.json(categories)
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/api/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where: {id: req.params.id}, include: [Product]})
  .then(category => {
    res.json(category)
  })
  .catch(err => {
    console.log(err)
  })
});

router.post('/api/categories', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(category => {
    res.json(category)
  })
  .catch(err => {
    console.log(err)
  })
});

router.put('/api/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id}})
  .then(category => {
    res.sendStatus(200)
  })
  .catch(err => {
    console.log(err)
  })
});

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}})
  .then(category => {
    res.json(200)
  })
});

module.exports = router;

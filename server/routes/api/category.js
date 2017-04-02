import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Category = mongoose.model('Category')

router.get('/get', (req, res) => {
  Category.find({}, (err, Categories) => {
    if(err) res.sendStatus(400)
    res.send(Categories)
  })
})

router.get('/getBySlug/:slug', (req, res) => {
  Category.find({slug: req.params.slug}, (err, category) => {
    if(err) res.sendStatus(400)
    if(category.length < 1) res.sendStatus(400)
    res.send(category[0])
  })
})

module.exports = router
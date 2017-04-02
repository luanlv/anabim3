import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Software = mongoose.model('Software')

router.get('/get', (req, res) => {
  Software.find({}, (err, Softwares) => {
    if(err) res.sendStatus(400)
    res.send(Softwares)
  })
})

router.get('/getBySlug/:slug', (req, res) => {
  Software.findOne({slug: req.params.slug}, (err, software) => {
    if(err) res.sendStatus(400)
    res.send(software)
  })
})

module.exports = router
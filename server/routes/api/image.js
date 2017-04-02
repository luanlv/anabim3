import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Image = mongoose.model('Image')

router.get('/get', (req, res) => {
  Image.find({}, (err, images) => {
    if(err) res.sendStatus(400)
    res.send(images)
  })
})

module.exports = router
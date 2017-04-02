import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Price = mongoose.model('Price')

router.get('/get', (req, res) => {
  Price.find({}, (err, Prices) => {
    if(err) res.sendStatus(400)
    res.send(Prices)
  })
})

router.get('/getOne', (req, res) => {
  Price.find({}, (err, price) => {
    if(err) res.sendStatus(400)
    res.send(price[0])
  })
})

module.exports = router
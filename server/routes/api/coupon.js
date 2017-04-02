import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Coupon = mongoose.model('Coupon')

router.get('/get', (req, res) => {
  Coupon.find({}, (err, Coupons) => {
    if(err) res.sendStatus(400)
    res.send(Coupons)
  })
})

router.post('/', bodyParser.json(), (req, res) => {
  console.log(req.body.code)
  Coupon.findOne({code: req.body.code}, (err, coupon) => {
    if (err) throw err
    if (!coupon)
      res.sendStatus(400)
    else
      res.json(coupon)
  })
})


module.exports = router
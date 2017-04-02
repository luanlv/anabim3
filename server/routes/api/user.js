import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const User = mongoose.model('User')

router.post('/password', bodyParser.json(), (req, res) => {
  if(!req.user) res.sendStatus(400)
  User.changePassword(req.user.username, req.body.password, (err, respond) => {
    if(err) throw err
    res.send('Mật khẩu đã được đổi')
  })
})

module.exports = router
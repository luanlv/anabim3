import express from 'express'
let router = express.Router()
import mongoose from 'mongoose'

const Token = mongoose.model('Token')
const User = mongoose.model('User')


router.get('/active/:token', (req, res) => {
  Token.findOne({token: req.params.token, type: 'signup', active: false}, (err, token) => {
    if (err) throw err
    console.log(token)
    if (!token)
      res.sendStatus(400)
    else
      User.update(
        {
          username: token.email
        },{
          $set: {
            emailConfirm: true
          }
        }, (err, user) => {
          console.log('set token')
          Token.update({token: req.params.token}, {$set: {active: true}}, (err, token) => {
            res.redirect('/')
          })
        })
  })
})


module.exports =  router
import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')
let axios = require('axios')
let map = require('./mapUrl').default
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Category = mongoose.model('Category')
const Software = mongoose.model('Software')
const Course = mongoose.model('Course')
const Video = mongoose.model('Video')
const Image = mongoose.model('Image')

router.get('/getList/:page', (req, res) => {
  let numImg = 10
  let page = req.params.page
  Image.find({}).sort({'createAt': -1}).skip((page-1)*numImg).limit(numImg).exec(function(err, images) {
    if(err) throw err
    res.send(images)
  });
})


module.exports = router


function isAdmin(req, res, next) {
  if(req.user)
    next()
  else
    res.sendStatus(400)
}
import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Video = mongoose.model('Video')
const Course = mongoose.model('Course')

router.get('/get', (req, res) => {
  Video.find({}, (err, videos) => {
    if(err) res.sendStatus(400)
    res.send(videos)
  })
})

router.get('/getByCourseID/:courseId', (req, res) => {
  Video.find({courseId: parseInt(req.params.courseId)}, (err, videos) => {
    if(err) res.sendStatus(400)
    res.send(videos)
  })
})

router.get('/getByCourseSlug/:courseSlug', (req, res) => {
  Course.findOne({slug: req.params.courseSlug}, (err, course) => {
    if(err) res.sendStatus(400)
    Video.find({courseId: course._id}, (err, videos) => {
      if(err) res.sendStatus(400)
      res.send(videos)
    })
  })
})

module.exports = router
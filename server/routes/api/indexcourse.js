import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const IndexCourse = mongoose.model('IndexCourse')

router.get('/get', (req, res) => {
  IndexCourse.find({}, (err, IndexCourses) => {
    if(err) res.sendStatus(400)
    res.send(IndexCourses)
  })
})
router.get('/getOne', (req, res) => {
  IndexCourse.find({}, (err, IndexCourses) => {
    if(err) res.sendStatus(400)
    res.send(IndexCourses[0].value)
  })
})


module.exports = router

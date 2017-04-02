import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')

const mongoose = require('mongoose')
const Course = mongoose.model('Course')
const Software = mongoose.model('Software')
const Category = mongoose.model('Category')

router.get('/get', (req, res) => {
  Course.find({}, (err, courses) => {
    if(err) res.sendStatus(400)
    res.send(courses)
  })
})

router.get('/getBySlug/:slug', (req, res) => {
  Course.aggregate([
    {
      $match: {slug: req.params.slug}
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: 'category',
        localField: 'cateID',
        foreignField: '_id',
        as: 'categories'
      }
    },
    {
      $lookup: {
        from: 'software',
        localField: 'softID',
        foreignField: '_id',
        as: 'software'
      }
    },
    {
      $lookup: {
        from: 'course',
        localField: 'related',
        foreignField: '_id',
        as: 'relatedCourse'
      }
    }
  ], (err, data) => {
    if (data.length < 1) {
      res.sendStatus(4000)
    } else {
      res.send(data[0])
    }
  })
})

router.get('/getByCourseSlug/:courseSlug', (req, res) => {
  Course.find({courseId: parseInt(req.params.courseId)}, (err, courses) => {
    if(err) res.sendStatus(400)
    res.send(courses)
  })
})


router.get('/getBySoftwareSlug/:slug', (req, res) => {
  Software.findOne({slug: req.params.slug}, (err, software) => {
    if (err) res.sendStatus(400)
    Course.find({softID: software._id}, (err, course) => {
      if (err) res.sendStatus(400)
      res.send(course)
    })
  })
})

router.get('/getByCategorySlug/:slug', (req, res) => {
  Category.findOne({slug: req.params.slug}, (err, category) => {
    if (err) res.sendStatus(400)
    Course.find({softID: category._id}, (err, course) => {
      if (err) res.sendStatus(400)
      res.send(course)
    })
  })
})

module.exports = router
import { Router } from 'express'
import moment from 'moment'
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
const Subscribe = mongoose.model('Subscribe')
const Price = mongoose.model('Price')
const Coupon = mongoose.model('Coupon')
const ActiveCode = mongoose.model('ActiveCode')
const IndexCourse = mongoose.model('IndexCourse')


router.get('/' ,(req, res) => {
  res.render('admin')
});

// category =================
router.get('/cate/get', isAdmin , (req, res) => {
  Category.find({}, (err, categories) => {
    if(err) throw err
    res.send(categories)
  })
})

router.post('/cate/new', isAdmin, bodyParser.json(), (req, res) => {
  Category.create(req.body, (err, category) => {
    if(err) throw err
    res.send(category)
  })
})

router.post('/cate/edit/:id', isAdmin, bodyParser.json(), (req, res) => {
  Category.update({_id: req.params.id}, req.body, (err, category) => {
    if(err) throw err
    res.send(category)
  })
})

router.post('/cate/delete', isAdmin, bodyParser.json(), (req, res) => {
  Category.remove({_id: req.body.id}, (err, respond) => {
    if (err) throw err
    res.send(respond)
  })
})


// Software =================

router.get('/soft/get', isAdmin , (req, res) => {
  Software.find({}, (err, software) => {
    if(err) throw err
    res.send(software)
  })
})

router.post('/soft/new', isAdmin, bodyParser.json(), (req, res) => {
  Software.create(req.body, (err, software) => {
    if(err) throw err
    res.send(software)
  })
})

router.post('/soft/edit/:id', isAdmin, bodyParser.json(), (req, res) => {
  Software.update({_id: req.params.id}, req.body, (err, software) => {
    if(err) throw err
    res.send(software)
  })
})


router.post('/soft/delete', isAdmin, bodyParser.json(), (req, res) => {
  Software.remove({_id: req.body.id}, (err, respond) => {
    if (err) throw err
    res.send(respond)
  })
})

// Course ====================

router.get('/course/get', isAdmin, (req, res) => {
  Course.find({}, (err, courses) => {
    if(err) throw err
    res.send(courses)
  })
})

router.get('/course/get/:id', isAdmin, (req, res) => {
  Course.findOne({_id: req.params.id}, (err, course) => {
    if(err) throw err
    res.send(course)
  })
})

router.post('/course/edit/:id', isAdmin, bodyParser.json(), (req, res) => {
  Course.update({_id: req.params.id}, req.body, (err, course) => {
    if(err) throw err
    res.send(course)
  })
})

router.post('/course/new', isAdmin, bodyParser.json(), (req, res) => {
  Course.create(req.body, (err, course) => {
    if(err) throw err
    res.send(course)
  })
})

router.post('/course/delete', isAdmin, bodyParser.json(), (req, res) => {
  Course.remove({_id: req.body.id}, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

// Video ============

router.get('/video/get/:courseId', isAdmin, (req, res) => {
  Video.find({courseId: req.params.courseId}, (err, videos) => {
    if(err) throw err
    res.send(videos)
  })
})

router.post('/video/new', isAdmin, bodyParser.json(), (req, res) => {
  Video.create(req.body, (err, video) => {
    if(err) throw err
    res.send(video)
  })
})

router.post('/video/edit', isAdmin, bodyParser.json(), (req, res) => {
  Video.update({_id: req.body._id}, req.body, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

router.post('/video/delete', isAdmin, bodyParser.json(), (req, res) => {
  Video.remove({_id: req.body.id}, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

// subscrible ==========


router.get('/subscribe/get', isAdmin, (req, res) => {
  Subscribe.find({done: false}, (err, subs) => {
    if (err) throw err
    res.send(subs)
  })
})
router.get('/subscribe/getDone', isAdmin, (req, res) => {
  Subscribe.find({done: true}, (err, subs) => {
    if (err) throw err
    res.send(subs)
  })
})

router.post('/membership/action', isAdmin, bodyParser.json(), (req, res) => {
  if(req.body.action) {
    Subscribe.update( {_id: req.body._id } ,{$set: {done: true, state: "Đồng ý"}}, (err, respond) => {
      if (err) throw err
      User.update({username: req.body.email}, {$set: {
        member: 'membership',
        info: {
          start: moment(),
          end: moment().add('months', req.body.month).add('days', req.body.bonusDay)
      }}}, (err, respond) => {
        if (err) throw err
        res.send(respond)
      })
    })
  } else {
    Subscribe.update( {_id: req.body._id } ,{$set: {done: true, state: "Không đồng ý"}}, (err, respond) => {
      if (err) throw err
      res.send(respond)
    })
  }

})

// users ==============

router.get('/users/getMembership', isAdmin, (req, res) => {
  User.find({member: 'membership'}, (err, users) => {
    if(err) throw err
    res.send(users)
  })
})

router.post('/users/updateEndDate', isAdmin, bodyParser.json(), (req, res) => {
  User.update({username: req.body.username}, {$set: { info: {end: req.body.date }}}, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

// price ============

router.get('/price/get', isAdmin, (req, res) => {
  Price.find({_id: 1}, (err, price) => {
    if (err) throw err
    if(price.length < 1) res.sendStatus(400)
    res.send(price[0])
  })
})

router.post('/price/update', isAdmin, bodyParser.json(), (req, res) => {
  Price.update({_id: 1}, req.body, (err, respond) => {
    if (err) throw err
    res.send(respond)
  })
})

// coupon ========

router.get('/coupon/get', isAdmin, (req, res) => {
  Coupon.find({}, (err, coupons) => {
    if(err) throw err
    res.send(coupons)
  })
})

router.post('/coupon/new', isAdmin, bodyParser.json(), (req, res) => {
  Coupon.create(req.body, (err, coupon) => {
    if(err) throw err
    res.send(coupon)
  })
})

router.post('/coupon/update', isAdmin, bodyParser.json(), (req, res) => {
  Coupon.update({_id: req.body._id}, req.body, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

router.post('/coupon/delete', isAdmin, bodyParser.json(), (req, res) => {
  Coupon.remove({_id: req.body._id}, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

// active code


router.get('/activecode/get', isAdmin, (req, res) => {
  ActiveCode.find({}, (err, coupons) => {
    if(err) throw err
    res.send(coupons)
  })
})

router.post('/activecode/new', isAdmin, bodyParser.json(), (req, res) => {
  ActiveCode.create(req.body, (err, coupon) => {
    if(err) throw err
    res.send(coupon)
  })
})

router.post('/activecode/update', isAdmin, bodyParser.json(), (req, res) => {
  ActiveCode.update({_id: req.body._id}, req.body, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

router.post('/activecode/delete', isAdmin, bodyParser.json(), (req, res) => {
  ActiveCode.remove({_id: req.body._id}, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

// index course

router.get('/setupIndexCourse/get', isAdmin, (req, res) => {
  IndexCourse.find({_id: 1}, (err, indexes) => {
    if(err) throw err
    if(indexes.length < 1) res.sendStatus(400)
    res.send(indexes[0])
  })
})

router.post('/indexCourse', isAdmin, (req, res) => {
  req.body._id = 1
  IndexCourse.update({_id: 1}, req.body, (err, respond) => {
    if(err) throw err
    res.send(respond)
  })
})

module.exports = router


function isAdmin(req, res, next) {
  if(req.user)
    next()
  else
    res.sendStatus(400)
}
import { Router } from 'express'
const router = new Router()
const mongoose = require('mongoose')
const Course = mongoose.model('Course')
const Software = mongoose.model('Software')

router.get('/:query', (req, res) => {
  let query = req.params.query
  var r = new RegExp(req.params.query,'i')
  Course.aggregate([
    {$match: {$or: [{ $text: {$search: query}}]}},
    {$project: {slug: {$concat: ['/course/','$slug']}, name: 1}}
  ], (err, respond) => {
    if(err) throw err
    if(respond.length > 0)
      res.send({data: respond})
    else
      Course.aggregate([
        {$match: {name: {$regex: r}}},
        {$project: {slug: {$concat: ['/course/','$slug']}, name: 1}}
      ], (err, respond2) => {
        if(err) throw err
        res.send({data: respond2})
      })
  } )
})

router.get('/soft/:query', (req, res) => {
  let query = req.params.query
  var r = new RegExp(req.params.query, 'i')
  Software.aggregate([
    {$match: {name: {$regex: r}}},
    {$project: {_id: 1}}
  ], (err, respond) => {
    if (err) throw err
    var arr = []
    respond.map((el) => {
      arr.push(el._id)
    })
    console.log(arr)
    Course.aggregate([
      {$match: {softID: {$in: arr}}},
      {$project: {slug: {$concat: ['/course/','$slug']}, name: 1}}
    ], (err, respond2) => {
      if(err) throw err
      res.send({data: respond2})
    })
  })
})

module.exports = router


function isAdmin(req, res, next) {
  if(req.user)
    next()
  else
    res.sendStatus(400)
}
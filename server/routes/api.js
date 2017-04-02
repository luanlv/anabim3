import { Router } from 'express'
const router = new Router()
let bodyParser = require('body-parser')
let axios = require('axios')
let map = require('./mapUrl').default
import fakeDB from '../fakeDB.js'
const mongoose = require('mongoose')
const User = mongoose.model('User')

// Sub api
let video = require('./api/video')
let course = require('./api/course')
let category = require('./api/category')
let activecode = require('./api/activecode')
let comment = require('./api/comment')
let coupon = require('./api/coupon')
let image = require('./api/image')
let software = require('./api/software')
let price = require('./api/price')
let membership= require('./api/membership')
let indexcourse = require('./api/indexcourse')
let search = require('./api/search')
let user = require('./api/user')


router.post('/get', bodyParser.json() ,(req, res) => {
  if(!req.body) res.sendStatus(400)
  let listData = req.body
  axios.all(asyncAxios(listData))
    .then(axios.spread((...args) => {
      // console.log('respond /get')
      // console.log(args)
      res.send(args)
    }))
});

router.use('/search', search)
router.use('/video', video)
router.use('/course', course)
router.use('/category', category)
router.use('/activecode', activecode)
router.use('/comment', comment)
router.use('/coupon', coupon)
router.use('/image', image)
router.use('/software', software)
router.use('/price', price)
router.use('/membership', membership)
router.use('/indexcourse', indexcourse)
router.use('/user', user)

router.get('/', (req, res) => {

  console.log( 'get api request ')
  setTimeout(() => {
    res.status(200).json(fakeDB)
  }, 300)
})

router.get('/:slug', (req, res) => {
  const index = fakeDB.findIndex(el => el.slug === req.params.slug)
  if (index < 0) {
    res.status(404).json({
      error: 'Post does not exist in db'
    })
  }

  setTimeout(() => {
    res.status(200).json(fakeDB[index])
  }, 300)
})

module.exports = router


function asyncAxios(listData){
  let result = []
  listData.forEach((el, index) => {
    let url
    if(el.t === 1){
      url = map[el.v].url
    } else {
      url = map[el.v].url + el.e
    }
    if (url) {
      result.push(axios.get(url).then((res) => { return {
        ok: true, value: res.data, req: el
      }}).catch(() => { return {
        ok: false, value: [], req: el
      }}))
    }
  });
  return result
}
var express = require('express')
var router = express.Router()

const movies = require('../data/movies')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/most_popular', function (req, res, next) {
  // get the page variable from the query string
  let page = req.query.page
  if (page === undefined) page = 1
  // if (req.query.api_key !== '12345') {
  //   res.status(401).json({ error: 'Unauthorized' })
  // } else {
  let results = movies.filter(function (movie) {
    return movie.most_popular
  })
  const indexToStart = (page - 1) * 20
  results = results.slice(indexToStart, indexToStart + 20)
  res.json({ results })
  // }
})

module.exports = router

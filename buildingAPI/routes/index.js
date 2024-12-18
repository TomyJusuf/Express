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

  let results = movies.filter(function (movie) {
    return movie
  })
  const indexToStart = (page - 1) * 20
  results = results.slice(indexToStart, indexToStart + 20)
  res.json({ page, results })
  // }
})

module.exports = router

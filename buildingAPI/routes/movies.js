var express = require('express')
var router = express.Router()
const movieDetails = require('../data/movieDetails')
/* GET movies page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

// GET movie/top_rated
router.get('/top_rated', function (req, res, next) {
  const topRated = movieDetails.filter(function (movie) {
    return movie.vote_average >= 5
  })
  console.log(topRated)
  if (Object.keys(topRated).length === 0) {
    res.json({ msg: 'No top rated movies found' })
  } else {
    res.json({ total: Object.keys(topRated).length, topRated: topRated })
  }
})

// GET /movie/:id
router.get('/:id', function (req, res, next) {
  const movieId = req.params.id
  const movieDetail = movieDetails.find((movie) => movie.id == movieId)
  console.log(movieId)
  if (!movieDetail) {
    res.json({ mgs: 'Movie not found' })
  } else {
    res.json(movieDetail)
  }
})

// POST movie/:id/rating
router.post('/:id/rating', function (req, res, next) {})

// DELETE movie/:id/rating
router.delete('/:id/rating', function (req, res, next) {})
module.exports = router

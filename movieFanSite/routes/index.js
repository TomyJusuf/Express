var express = require('express')
var router = express.Router()
const request = require('request')

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8'
const apiBaseUrl = 'http://api.themoviedb.org/3'
const nowPlayingUrl = `${apiBaseUrl}/movie/popular?api_key=${apiKey}`
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const parseData = JSON.parse(body)

      res.render('index', {
        parseData: parseData.results,
      })
    }
  })
})

router.get('/movie/:id', function (req, res, next) {
  const id = req.params.id
  const movieUrl = `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`

  request.get(movieUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const parseData = JSON.parse(body)

      res.render('single-movie', {
        movieDetail: parseData,
      })
    }
  })
})

router.post('/search', function (req, res, next) {
  const searchTerm = req.body.movieSearch
  const cat = req.body.cat

  const searchUrl = encodeURI(
    `${apiBaseUrl}/search/${cat}?query=${searchTerm}&api_key=${apiKey}`
  )

  request.get(searchUrl, (error, response, body) => {
    const parseData = JSON.parse(body)

    res.render('index', {
      parseData: parseData.results,
    })
  })
})

router.get('/person/:id', function (req, res, next) {
  const id = req.params.id

  const movieUrl = `${apiBaseUrl}/person/${id}?api_key=${apiKey}`

  request.get(movieUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const parseData = JSON.parse(body)

      res.render('actor-detail', {
        actorDetail: parseData,
      })
    }
  })
})

module.exports = router

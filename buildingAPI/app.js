var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const helmet = require('helmet')
var app = express()

app.use(helmet())

app.use((req, res, next) => {
  if (req.query.api_key !== '12345') {
    res.status(401) // unauthorized == 401, NOT 201
    res.json('Unauthorized')
  } else {
    next()
  }
})

// now_playing
var indexRouter = require('./routes/index')
//  /movies/...
const movieRouter = require('./routes/movies')
//  /search/...
const searchRouter = require('./routes/search')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/movie', movieRouter)

app.use('/search', searchRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app

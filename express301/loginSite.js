const path = require('path')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

const helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
  if (req.query.msg === 'fail') {
    res.locals.msg =
      'Sorry. This username and password combination does not exist.'
  } else {
    res.locals.msg = ''
  }
  next()
})

app.get('/', (req, res, next) => {
  res.send('Sanity Check')
})

app.get('/login', (req, res, next) => {
  // the req object has a query property in Express
  // req.query is an object, with a property og every key in the query string
  console.log(req.query)
  res.render('login')
})

app.post('/process_login', (req, res, next) => {
  const password = req.body.password
  const username = req.body.username
  // check the db to see if user credentials are valid
  // if they are valid...
  // - save their username in a cookie
  // - is send them to the welcome page
  if (password === 'x') {
    // res.cookie takes 2 args:
    // 1. name of the cookie
    // 2. value to set it to
    res.cookie('username', username)
    // res.redirect takes 1 arg:
    // 1. Where to send the brower
    res.redirect('/welcome')
  } else {
    // The "?" is a special character in a URL
    res.redirect('/login?msg=fail&test=hello')
  }
  // res.json(req.body)
})

app.get('/welcome', (req, res) => {
  res.render('welcome', {
    username: req.cookies.username,
  })
})

// app.param() - take 2 args:
// 1. param to look for in the route
// 2. callback function

app.param('id', (req, res, next, id) => {
  console.log('Pram called: ', id)
  // if id has something to do with stories...
  // it will have a property for each wildcard in the route
  next()
})

app.get('/story/:id', (req, res) => {
  res.send('Story ' + req.params.id)
})

app.get('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/login')
})

app.listen(3000)
console.log('Server listening on port 3000...')

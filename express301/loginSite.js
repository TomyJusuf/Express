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

app.get('/', (req, res, next) => {
  res.send('Sanity Check')
})

app.get('/login', (req, res, next) => {
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

app.get('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/login')
})

app.listen(3000)
console.log('Server listening on port 3000...')

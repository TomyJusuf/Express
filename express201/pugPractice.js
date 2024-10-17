const path = require('path')

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(helmet()) //MY BAD... HELMET ON... READY FOR BATTLE!

// serve up static files
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'view'))

function validateUser(req, res, next) {
  // ... validated logic
  res.locals.validated = true
  next()
}

app.use(validateUser)

app.get('/about', (req, res, next) => {
  res.render('about', {})
})

app.get('/', (req, res, next) => {
  res.render('index', {
    countries: [
      {
        name: 'Russia',
        capital: 'Moscow',
        western: false,
      },
      {
        name: 'England',
        capital: 'London',
        western: true,
      },
    ],
    msg: 'Failure!',
    msg2: 'Success!',
    html: `<p><img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="300"/></p>`,
  })
})

app.listen(3000)

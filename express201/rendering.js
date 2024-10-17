const path = require('path')

const express = require('express')
const app = express()

const helmet = require('helmet')
app.use(helmet({ contentSecurityPolicy: false }))

app.use(express.static('public'))
// parse json and urlencoded data into req.body
app.use(express.json())
app.use(express.urlencoded())

// take 2 params
// 1. key 2. value
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.get('/', (req, res, next) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

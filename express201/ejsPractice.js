const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const helmet = require('helmet')

app.use(helmet())

function validate(req, res, next) {
  // some logic for validation
  res.locals.validated = true
  next()
}

app.use(validate)

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'view'))

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Hello EJS',
    head: path.join(__dirname, 'head.ejs'),
    body: path.join(__dirname, 'body.ejs'),
    navbar: path.join(__dirname, 'navbar.ejs'),
    footer: path.join(__dirname, 'footer.ejs'),
    name: 'EJS text',
    message: 'Hello World',
    imageUrl:
      'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-img-file-document-icon-png-image_892886.jpg',
  })
})

app.listen(3000)

const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const helmet = require('helmet')

app.use(helmet())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'view'))

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Hello HBS title',
    text: 'hello from HBS ',
    message: 'Hello World  and beautiful days',
    link: 'https://handlebarsjs.com/guide/#template-comments',
    data: [
      {
        city: 'Moscow',
        country: 'Russia',
        isEu: false,
      },
      {
        city: 'Berlin',
        country: 'Germany',
        isEu: true,
      },
      {
        city: 'Paris',
        country: 'France',
        isEu: true,
      },
      {
        city: 'London',
        country: 'England',
        isEu: false,
      },
    ],
  })
})

app.listen(3000)

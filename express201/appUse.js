const express = require('express')
const app = express()

// EXPRESS
// 1.Router
// 2.Middleware that comprises a webframework

//  Req -- MIDDLEWARE -- Res

//validate user
function validateUser(req, res, next) {
  // get ingo out of the req object
  res.locals.validated = true
  console.log('User is validated')
  next()
}

// This will run validate on ALL paths,all methods
app.use('/', validateUser)

// This will run validate only on /admin
app.use('/admin', (req, res, next) => {
  res.locals.validated = true
  console.log('User is validated /admin')
  next()
})

// // This will run validate only on /
app.get('/', validateUser)

app.get('/', (req, res, next) => {
  res.send('<h1> Main page</h1>')
  console.log(res.locals.validated)
})

app.get('/admin', (req, res, next) => {
  res.send('<h1> Admin page</h1>')
  console.log(res.locals.validated)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

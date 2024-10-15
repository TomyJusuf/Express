const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

// all is used for all routes
// 1. route
// 2. callback to run if the route is requested
app.all('/', (req, res) => {
  // Express handles the basic headers (status code, content-type) !Awesome!
  // read in Node.html
  console.log(path.join(__dirname, 'node.html'))
  res.sendFile(path.join(__dirname, 'node.html'))
})

app.all('*', (req, res) => {
  res.send('Sorry, page not found...')
})

app.listen(3000)

console.log('App is running on port 3000')

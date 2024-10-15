const path = require('path')
const express = require('express')
const app = express()

// app comes with a use method
// use take 1 arg (right now )
// 1. the middleware you want to use
app.use(express.static('public'))

console.log(__dirname, 'index.html')
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

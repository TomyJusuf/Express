const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')

app.use(helmet())

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

console.log(path.join(__dirname, 'public'))
// 1. static
// 2. json
// 3. urlencoded

app.post('/ajax', (req, res) => {
  console.log(req.body)
  res.json(['test', 1, 2, 3, 4])
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

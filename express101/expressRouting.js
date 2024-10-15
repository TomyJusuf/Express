const express = require('express')
const app = express()

// HTTP methods CRUD
// 1. get - READ
// 2. post - CREATE
// 3. put - CREATE OR UPDATE
// 4. delete - DELETE
// 5. patch - UPDATE

// Take 2 args
// 1. path
// 2. callback to run if an HTTP method is requested

app.get('/', (req, res) => {})
app.post('/', (req, res) => {})
app.put('/', (req, res) => {})
app.delete('/', (req, res) => {})

app.listen(3000, () => {
  console.log('Server lsitening on post 3000')
})

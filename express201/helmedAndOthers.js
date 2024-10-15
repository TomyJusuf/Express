const express = require('express')
const app = express()

// app comes with a use method
app.post('/', (req, res) => {
  console.log(req)
  res.send('Test')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

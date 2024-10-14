const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
  //   console.log(req)
  // http message
  // 1. start line
  // 2. headers
  // 3. body
  // writeHead take 2 args
  // 1. status code
  // 2. object for the mime-type
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Hello World</h1>')
  res.end()
})

server.listen(port)

// curl -v localhost:3000

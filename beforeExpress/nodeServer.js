const http = require('http')

// fs= file system module! fs is build into Node, see abouot
// fs gives node access to THIS computers file system
const fs = require('fs')
const path = require('path')

const port = 3000
const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    // http message
    // 1. start line
    // 2. headers
    // 3. body
    // writeHead take 2 args
    // 1. status code
    // 2. object for the mime-type
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write('')

    const homePage = fs.readFileSync('node.html')
    res.write(homePage)
    res.end()
  } else if (req.url === '/Node.js_logo.svg.png') {
    res.writeHead(200, { 'Content-Type': 'image/png' })
    const image = fs.readFileSync(path.join(__dirname, 'Node.js_logo.svg.png'))
    res.write(image)
    res.end()
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' })
    const style = fs.readFileSync(path.join(__dirname, 'style.css'))
    res.write(style)
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>Sorry, this is not the page you would want</h1>')
    res.end()
  }
})

server.listen(port)

// curl -v localhost:3000

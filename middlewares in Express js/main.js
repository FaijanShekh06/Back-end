const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const blogRouter = require('./Routes/blog')

app.use(express.static('public'))
app.use('/blog', blogRouter)

//Middleware 1 - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.faijan = 'I am Faijan'

  fs.appendFileSync('public/log.txt', `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`);
  next(); // Pass control to the next middleware function
})

//Middleware 2
app.use((req, res, next) => {
  req.faijan = 'I am Faijan Shekh'
  console.log(`m2`);
  next(); // Pass control to the next middleware function
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About! ' + req.faijan)
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

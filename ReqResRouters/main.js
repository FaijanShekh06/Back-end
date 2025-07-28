const express = require('express')
const app = express()
const port = 3000
const blogRouter = require('./Routes/blog')
const shopRouter = require('./Routes/shop')

app.use(express.static('public'))
app.use('/blog', blogRouter)
app.use('/shop', shopRouter)

// app.get('/', (req, res) => {
//   console.log(`Hey its a GET request to /`);
//   res.send('<h1>Hello World! GET</h1>')
// })

// app.post('/', (req, res) => {
//   console.log(`Hey its a POST request to /`);
//   res.send('<h1>Hello World! POST</h1>')
// })

// app.put('/', (req, res) => {
//   console.log(`Hey its a PUT request to /`);
//   res.send('<h1>Hello World! PUT</h1>')
// })

// ! Another way to handle different HTTP methods on the same route

//* This called chaining methods of request
app.get('/', (req, res) => {
  console.log(`Hey its a GET request to /`);
  res.send('Hello World! GET')
}).post('/', (req, res) => {
  console.log(`Hey its a POST request to /`);
  res.send('Hello World! POST')
}).put('/', (req, res) => {
  console.log(`Hey its a PUT request to /`);
  res.send('Hello World! PUT')
})

app.get('/index', (req, res) => {
  console.log("Hey its a GET request to /index");
  res.sendFile('/templates/index.html', { root: __dirname })

})

app.get('/api', (req, res) => {
  console.log("Hey its a GET request to /api");
  res.json({ message: 'Hello from API' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

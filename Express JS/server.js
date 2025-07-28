const express = require('express')
const app = express()
const port = 3000

// public static files
app.use(express.static('public'))
// app.use(express.static('public')) // for serving static files like images, css, js, etc.

//app.get or app.post or app.put or app.delete(path, callback)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/home', (req, res) => {
  res.send('<h1>Hello home!</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Hello contact!</h1>')
})

app.get('/blog', (req, res) => {
  res.send('<h1>Hello blog!</h1>')
})


app.get('/blog/:slug', (req, res) => {
  // * login to fetch {intro-js} content from database 
  // ! http://127.0.0.1:3000/blog/intro-to-js?mode=dark&region=in
  console.log(req.params) // { slug: 'intro-js', second: 'second-value' }
  console.log(req.query) // { mode: 'dark', region: 'in' }

  res.send(`<h1>Hello ${req.params.slug}!</h1>`)
})

// app.get('/blog/intro-js', (req, res) => {
//   // * login to fetch intro-js content from database
//   res.send('<h1>Hello intro-js!</h1>')
// })

// app.get('/blog/intro-python', (req, res) => {
//   // * login to fetch intro-python content from database
//   res.send('<h1>Hello intro-python!</h1>')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

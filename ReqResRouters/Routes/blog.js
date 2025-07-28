const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blog Home Page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About this blog')
})
// define the contact route 
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetching the blog post for ${req.params.slug}`)
})

module.exports = router
// This router can be used in the main app file to handle blog-related routes
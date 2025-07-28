const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Shop Home Page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About this Shop')
})


module.exports = router
// This router can be used in the main app file to handle blog-related routes
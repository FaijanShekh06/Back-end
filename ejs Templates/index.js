const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = "Abibas"
  let searchText = "Search"
  let arr = ["item1", "item2", "item3"];
  res.render("index", { siteName: siteName, searchText: searchText, arr });
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Abibas Blog"
  let blogContent = "This is a blog about Abibas."
  res.render("blogPost", { blogTitle: blogTitle, blogContent: blogContent });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

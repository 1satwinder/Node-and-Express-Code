const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware. This is a express build-in middleware
app.use(express.static('./public'))

console.log(path.resolve(__dirname, './navbar-app/index.html'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

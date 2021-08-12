var http = require('http')
var fs = require('fs')

// this code demonstrate how we first read data using stream and server response to that data in streams
http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8')
    fileStream.on('open', (result) => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err+"new job")
    })
  })
  .listen(5000, () => {console.log("Listening at 5000")})
  
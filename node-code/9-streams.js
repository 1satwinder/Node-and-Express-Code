// when the file size is to big and we cannot store in variable. We use streams which

const {createReadStream} = require('fs');

// default size of buffer: 64kb
// highWaterMark to change buffer size
// we can also pass encoding:utf8 to check real output
//const stream = createReadStream('./content/bigFile.txt', {highWaterMark:90000 , encoding:"utf8"});

const stream = createReadStream('./content/bigFile.txt', {highWaterMark:90000});

stream.on("data", (result)=> {
    console.log(result);
})
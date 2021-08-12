// os build in module
const os = require('os');

console.log(os.userInfo());

const currOS = {
    name: os.type(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
    release: os.release()
}
console.log(currOS);
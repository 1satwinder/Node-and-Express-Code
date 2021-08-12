const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order. first write listen code and then emit event at last. See below
// additional arguments
// built-in modules utilize it this eventemiter. for example http module use it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)
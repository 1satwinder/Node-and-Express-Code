console.log("Hello world");

// setInterval( ()=> console.log("Hello world"), 1000 );
// GOLBAL variables: No window
//  __dirname
//  __filename
//  require
//  module
//  process
console.log(__dirname);

// CommonJS every file is a module by default

const john = 'john singh';
const peter = 'peter';

const say = (name) => {
    console.log(name);
}

// console.log(module); module is an object which has export object in it
// if we have multiple values we set to object. 
//we can also do in simple equal in case of one value such as module.exports = say;
// also we have such syntax of module.exports.firstperson = person; 
module.exports = {john,peter, say};





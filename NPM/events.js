var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var minhafuncao = function () {
  console.log('Eu estou ouvindo');
}

//Assign the event handler to an event:
eventEmitter.on('scream', minhafuncao);

//Fire the 'scream' event:
eventEmitter.emit('scream');                       
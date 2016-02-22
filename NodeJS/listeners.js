var events 		=	require('events');
var eventEmitter	=	new events.EventEmitter();

var listener1		=	function listener1(){
				console.log('Listener1 executed');
				}
var listener2		=	function listener2(){
				console.warn('Listener2 executed');
				}

eventEmitter.addListener('Connection',listener1);
eventEmitter.addListener('Connection',listener2);

var eventListeners	= require('events').EventEmitter.listenerCount(eventEmitter,'Connection');
console.log(eventListeners+"Listener listening to conneciont");


eventEmitter.emit('Connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('Connection', listener1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('Connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'Connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

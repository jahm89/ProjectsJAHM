var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected () {
	 console.warn('Connection succesfull');

	 eventEmitter.emit('data_received');
};

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function () {
	 console.warn('Data received successfully');
});

eventEmitter.emit('connection');

console.warn('Finish');
var emitterConstactor = require('events').EventEmitter;
//var Emitter = new emitterConstactor.EventEmitter();
var inheritor = require('inheritor');
var util = require('util');

util.inherits(ticket, emitterConstactor.EventEmitter);
var ticket = new ticker();

//ticker.inherits(Master, emitterConstactor.EventEmitter);


Ticker.on('second', function(err, params) {
    if (err) {
        console.log(err);
    }
    console.log('second');
});

Ticker.on('second', function(err, params) {
    if (err) {
        console.log(err);
    }
    console.log(params);
});

setInterval(function() {
    Ticker.emit("second");
}, 1000);

///ticker that tick every 1 second
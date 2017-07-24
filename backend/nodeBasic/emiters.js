var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();
    process.nextTick(function() {
        var count = 0;
        e.emit('start'); //invoke emitter (now its start)
        //another iife function that acts like a for loop
        var t = setInterval(function() {
            //  console.log("hello");
            e.emit('data', ++count);
            //  console.log("goodbye");
            //if count hits the max number of times as given to function
            if (count === c) {
                console.log(c);
                e.emit('end', count);
                //kills setInterval
                clearInterval(t);
            }
        }, 500); //the ms definition for setInterval
    });
    return e;
}

var r = getResource(5);



r.on('start', function() {
    console.log("I've started")
});

r.on('data', function(d) {
    console.log("I've recived data number: " + d)
});

r.on('end', function(t) {
    console.log("I'm done with " + t + " data events")
});
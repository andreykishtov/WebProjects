const emitter = require("events").EventEmitter;
//var em = new emitter();

var em;
em.func(10);

function func(x) {
    this x = new emitter();
    this.emit("start", 1)

    process.nextTick(function() {
        while (x > 1) {
            this.emit("number", x)
                --x;
            process.nextTick(function() {
                this.emit("number2", ++x)
            });
        }
        this.emit("end", "after while");
    });
}


em.on("start", function(data) {
    console.log("first number " + data);
})

em.on("number", function(data) {
    console.log("number of data " + data);
})

em.on("end", function(data) {
    console.log("number of data " + data);
})

em.on("number2", function(data) {
    console.log("number of data " + data);
})
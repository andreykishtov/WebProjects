var maxTime = 1000;

var processResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + "ms )");
    }
};

var evenDoubler = function(v, callback) {
    console.log(v);
    var waitTime = Math.floor(Math.random() * (maxTime));
    // var waitTime = 0;
    if (v % 2) {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v * 2, waitTime);
        }, waitTime);
    }
};


evenDoubler(4, processResults);
evenDoubler(5, processResults);
evenDoubler(2, processResults);
evenDoubler(8, processResults);
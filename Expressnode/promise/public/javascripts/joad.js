(function() {
    function initialRequestA() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                $.get("/ajax1", function(data) {
                    //$(".result").html(data);
                    console.log(data);
                    alert("Load was performed: " + JSON.stringify(data));
                    resolve(data);
                });
            }, 20);
        });
    }

    function initialRequestB() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                $.get("/ajax2", function(data) {
                    //$(".result").html(data);
                    alert("Load was performed: " + JSON.stringify(data));
                    resolve(data);
                });
            }, 50);
        });
    }

    function getOptionsFromInitialData(a, b) {
        return { c: a.a * b.b };
    }

    function finalRequest(options, callback) {
        if (options.c == 10) {
            callback(null, 'data Is: ');
        } else {
            callback('Access denied.');
        }
    }

    function finalRequestPromise(options) {
        return new Promise(function(resolve, reject) {
            finalRequest(options, function(error, data) {
                $.get("/ajax3", function(lastdata) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data + JSON.stringify(lastdata));
                    }
                });
            });
        });
    }

    Promise
        .all([initialRequestA(), initialRequestB()])
        .then(function(results) {
            var options = getOptionsFromInitialData(results[0], results[1]);
            return finalRequestPromise(options);
        })
        .then(
            function(file) { alert(file); },
            function(error) { alert('ERROR: ' + error); }
        );
})();
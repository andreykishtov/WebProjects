var a = {};
a.stuff = {};
a.stuff["crazy"] = "stuff";
if (a == Object) console.log("yes");
if (!undefined)
    console.log(a.stuff.crazy);


f = function(x) {

    var result = moshe(x);

    function moshe(x) {
        return ziv();
        var y = x;

        function ziv(y) {
            return f;
        }
        return
    }

    return result;
}
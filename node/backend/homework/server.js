const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('/home/andrey/andreykurs/web/backend/homework'));
app.get('/', function(req, res) {
    res.send('./index.html');
    res.end();
});

app.get("/andrey_get", function(req, res) {
    var person = req.query;
    console.log(person);
    person.bmi = 10000 * person.weight / (person.height * person.height);
    console.log(person.bmi);
    // var element = "";
    // for (var key in person) {
    //     element = element + "\n" + key + ":" + person[key];

    // }
    //    person.pipe(fs.createWriteStream("facebook.html"));
    var newFile = fs.writeFile("/home/andrey/andreykurs/web/backend/homework/" + person.FirstName + ".txt", JSON.stringify(person), function(err) {
        //var newFile = fs.writeFile("/home/andrey/andreykurs/web/backend/homework/" + person.FirstName + ".txt", element, function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("file written succesfully");
            return;
        }
    });
    //console.log(element);
    //var wstream = fs.createWriteStream('/home/andrey/andreykurs/web/backend/homework' + person.name + '.txt');
    //wstream.write(JSON.stringify(person));
    //wstream.write('Another line\n');
    //wstream.end();
    res.end();
});


app.listen(3000, function() {
    console.log('server 3000!');
});
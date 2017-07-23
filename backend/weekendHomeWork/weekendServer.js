const express = require('express');
const app = express();

app.use(express.static('../weekendHomeWork'));
app.get('/', function(req, res) {
    res.send('./index.html');
}).listen(9999, function() {
    console.log('Example app listening on port 3000!');
})
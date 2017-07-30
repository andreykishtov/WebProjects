for (var i = 0; i < categories.length; ++i) {
    var ahref = document.getElementById("cat" + (i + 1));
    ahref.innerText = categories[i].categories;
    ahref.href = "/cart?product=" + (i + 1);
}

window.onload = function(params) {
    var socket = io.connect('http://localhost:3000');
    socket.on('news', function(data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}
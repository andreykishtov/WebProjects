$(document).ready(function() {
    var ajax;
    //var tempoptions;
    var cartDiv = "newCart";
    var options = {
            "products": [],
            "ajax": 0,
            "url_load_page_count": 4,
            "products_load_url": "http://wpwith.us/experis/cart-products-ajax.php"
        }
        //console.log(options.products);

    var socket = io.connect('http://localhost:3000');
    socket.on('beforeload', function(data) {
        // console.log(data);
        options.products["0"] = {
            selector: data.sendresult["0"].categories_id,
            items: data.sendresult
        }
        $("#NewProducts").shop(options, cartDiv);
    });
});
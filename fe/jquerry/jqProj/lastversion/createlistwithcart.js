$(document).ready(function() {
    var ajax;
    var cartDiv = "newCart";
    var options = {
        "products": products,
        "ajax": 1,
        "url_load_page_count": 2,
        "products_load_url": "http://wpwith.us/experis/cart-products-ajax.php"
    }

    $("#NewProducts").shop(options, cartDiv);
});
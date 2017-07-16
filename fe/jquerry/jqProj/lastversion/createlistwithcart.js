$(document).ready(function() {
    var ajax;
    var options = {
        "products": products,
        "ajax": 1,
        "url_load_page_count": 10
    }

    $("#NewProducts").shop(options, "newCart");
});
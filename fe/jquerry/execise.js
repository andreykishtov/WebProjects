$(document).ready(function() {
    var products = [{ "title": "Table Cloth 120 Round White", "price": "667.06" },
        { "title": "Cheese - Goat With Herbs", "price": "423.92" },
        { "title": "Cheese - Parmesan Grated", "price": "1847.34" },
        { "title": "Glass - Wine, Plastic, Clear 5 Oz", "price": "297.07" },
        { "title": "Tart Shells - Savory, 2", "price": "392.86" },
        { "title": "Versatainer Nc - 888", "price": "641.50" },
        { "title": "Table Cloth 54x72 White", "price": "1167.59" },
        { "title": "Cakes Assorted", "price": "757.93" },
        { "title": "Shrimp - Black Tiger 8 - 12", "price": "143.15" },
        { "title": "Chinese Foods - Thick Noodles", "price": "940.88" },
        { "title": "Fireball Whisky", "price": "1213.95" } /*,*/
        // { "title": "Nut - Hazelnut, Ground, Natural", "price": "$1974.16" },
        // { "title": "Goat - Leg", "price": "$1197.14" },
        // { "title": "Juice - Orange", "price": "$612.72" },
        // { "title": "Garlic", "price": "$258.33" },
        // { "title": "Beef - Ground, Extra Lean, Fresh", "price": "$106.43" },
        // { "title": "Chevere Logs", "price": "$584.31" },
        // { "title": "Soup - Verve - Chipotle Chicken", "price": "$1477.41" },
        // { "title": "Oil - Grapeseed Oil", "price": "$213.43" },
        // { "title": "Sauce - Balsamic Viniagrette", "price": "$1961.06" },
        // { "title": "Sole - Dover, Whole, Fresh", "price": "$1201.42" },
        // { "title": "Tilapia - Fillets", "price": "$148.92" },
        // { "title": "Clams - Littleneck, Whole", "price": "$1342.98" },
        // { "title": "Syrup - Pancake", "price": "$1556.20" },
        // { "title": "Potatoes - Mini Red", "price": "$210.02" },
        // { "title": "Wine - Merlot Vina Carmen", "price": "$1561.36" },
        // { "title": "Doilies - 10, Paper", "price": "$1704.17" },
        // { "title": "Sage - Ground", "price": "$1778.64" },
        // { "title": "Tea - Black Currant", "price": "$1422.22" },
        // { "title": "Flour - Pastry", "price": "$1132.86" },
        // { "title": "Wine - Winzer Krems Gruner", "price": "$736.77" },
        // { "title": "Lobster - Baby, Boiled", "price": "$1907.44" }
    ];
    //    var div = $('<div>', { className: 'change-me', 'data-name': 'hello' }).css({ color: 'red' });
    var mainDiv = $("#container");
    var sum = 0;
    for (var index = 0; index < products.length; index++) {
        var product = products[index];
        var newdiv = $('<div>');
        var ul = $("<ul>");
        var li = $("<li>");
        var li2 = $("<li>");
        li.text(product.title);
        ul.append(li)
        li2.text(product.price);
        ul.append(li2);
        //newdiv.html(ul + li + product.title + li + " " + li + product.price + li + ul);
        newdiv.append(ul)
        mainDiv.append(newdiv);
        newdiv.click(function(event) {
            // var jindexobj = $("div div:last-child").index(this);
            var childs = $(this).last();
            if ($(this).hasClass("clicked")) {
                sum -= childs.text();
                childs.text(sum);
            } else {
                sum += childs.text();
                childs.text(sum);
            }
            $(this).toggleClass('clicked');
        });
    }
});
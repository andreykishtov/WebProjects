shop(products, "newCart");



function shop(products, cartSelector) {

    var cart = (function(selector) {
        createTable(selector);

        function createTable(selector) {

            createRow("#" + selector, 1, '<th colspan="5">', ['Cart']);
            createRow("#" + selector, 5, '<th>', ['', 'Product', 'Quantity', 'Price', 'Total']); //id //number of cells in row //
            createRow("#" + selector, 5, '<td>', ['Total', "", '0', "", "0"], '<tr id="' + selector + '-end">');

        }

        function createRow(tableId, howmanyinrow, tdorth, data, tr) {
            var tRow;
            var tCell;
            if (tr == undefined) {
                tr = '<tr>';
            }
            $.each(data, function(i) {
                if (!(i % howmanyinrow)) tRow = $(tr);
                tCell = $(tdorth).html(data[i]);
                $(tableId).append(tRow.append(tCell));
            });
        }

        function addItem(sku, title, price) {
            if (typeof sku === 'object' && arguments.length === 1) {
                title = sku.title;
                price = sku.price;
                sku = sku.sku;
            }
            //console.log($("#" + sku));
            if ($("#" + sku).length) {
                AddToCreatedRow($("#" + sku), true)
            } else {
                createRow("#" + selector + "-end", 5, '<td>', ['', title, '<input type="number" value="1">', price, price], "<tr id=" + sku + ">");
            }

            function createRow(tableId, howmanyinrow, tdorth, data, tr) {
                var tRow;
                var tCell;
                if (tr == undefined) {
                    tr = '<tr>';
                }
                $.each(data, function(i) {
                    if (!(i % howmanyinrow)) tRow = $(tr);
                    tCell = $(tdorth).html(data[i]);
                    (tRow.append(tCell)).insertBefore($(tableId));
                });
            }
            itemSum(sku);
            $("#" + sku).change(function() {
                AddToCreatedRow($("#" + sku));
            });
        }

        function AddToCreatedRow(skuId, add) { //id and check for add or onchange
            var value = skuId.find("td:nth-child(4)").text();
            var save = skuId.find("td:nth-child(5)");
            var howmany = skuId.find("td:nth-child(3) input").val();
            if (add) {
                skuId.find("td:nth-child(3) input").val(++howmany);
            }
            value = value.split("$");
            save.text((value[1] * howmany).toFixed(2));
            totalSum();
        }

        function itemSum(rowId) {

        }

        function totalSum(nameofClass, rowId) {

        }

        return { "addItem": addItem };
    })(cartSelector);

    for (var i = 0; i < products.length; ++i) {
        var prod = products[i];
        var product = new ProductList(prod.items, prod.selector, cart);
    }
}

function ProductList(items, selector, cart) {
    if (items.sku) {
        function createsku() {
            for (var key in object) {
                var element = object[key];

            }
        }
    }
}
var container = $(selector);
items.forEach(function(element, i) {
    var newDiv = $('<div>');
    $('<img/>', { class: 'imageCart', src: element.image, width: 100 }).appendTo(newDiv);
    $("<h2>", { class: 'NameOfItem', }).text(element.title).appendTo(newDiv);
    $("<p>", { class: 'pricePlaceHolder', }).text(element.price).appendTo(newDiv);
    var btn = $('<button>', { class: 'buttonCart', }).text('Add to Cart');
    btn.data('prod', {
        sku: element.sku,
        title: element.title,
        price: element.price
    });
    btn.click(function() {
        cart.addItem($(this).data('prod'));
    }).appendTo(newDiv);
    newDiv.appendTo($("#" + selector));
});
}
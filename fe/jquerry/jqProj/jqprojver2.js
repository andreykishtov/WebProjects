shop(products, "newCart"); //cartSelector


function shop(products, cartSelector) {
    //create cart with items/////////////////////
    var cart = (function(selector) {
        // var addItem;
        createTable(selector);
        //////create table fro card in dome///////////////
        function createTable(selector) {
            createRow("#" + selector, 1, '<th colspan="5">', ['Cart']);
            createRow("#" + selector, 5, '<th>', ['', 'Product', 'Quantity', 'Price', 'Total']); //id //number of cells in row //
            createRow("#" + selector, 5, '<td>', ['Total', "", '0', "", "0"], '<tr id="TotalMoney">');

        }

        function createRow(tableId, howmanyinrow, tdorth, data, tr) {
            if (tr == undefined) {
                tr = '<tr>';
            }
            $.each(data, function(i) {
                if (!(i % howmanyinrow)) tRow = $(tr);
                tCell = $(tdorth).html(data[i]);
                $(tableId).append(tRow.append(tCell));
            });
        }
        //////////////////////////////////////////
        //, that, title, price, divname, cartName
        function addItem(sku) { // sku is index where is item in product list;
            if (typeof sku === 'object' && arguments.length === 1) {
                that = sku.that;
                title = sku.title;
                price = sku.price;
                divname = sku.divname;
                cartName = sku.myCart.cartname;
                sku = sku.sku;
            }
            //var index = $("#" + divname + " div").index(that);
            var table = $("#" + cartName).children();
            if ($("#rowid sku:" + sku + " id:" + that).length) {
                // addToRow(index, true);
                changeByInput($("#rowid sku:" + sku + " id:" + that), true);
                //totalChange();
            } else { //if no rows added
                createRow(cartName, 5, '<td>', ['X', title, '1', price, price]) //totalChange();
            }
            // Do all the rest
        }
        var returnobject = { "cartname": selector, addItem: addItem };
        return returnobject;
    })(cartSelector);

    for (var i = 0; i < products.length; ++i) {
        var prod = products[i];
        var product = new ProductList(prod.items, prod.selector, cart);
    }
    ///////////////////////////create list function//////////////////////////////
    function ProductList(items, selector, cart) {
        var indexofProduct = 0;
        var container = $(selector);
        items.forEach(function(element, i) {
            // create the product div
            var newDiv = $('<div>');
            $('<img/>', { class: 'imageCart', src: element.image, width: 100 }).appendTo(newDiv);
            $("<h2>", { class: 'NameOfItem', }).text(element.title).appendTo(newDiv);
            $("<p>", { class: 'pricePlaceHolder', }).text(element.price).appendTo(newDiv);
            //$("<button>", { class: 'buttonCart', }).click(function() { addToCart($(this).parent(), elements); }).text("Add To Cart").appendTo(newDiv);
            ////////////////////////////////
            var btn = $('<button>', { class: 'buttonCart', }).text('Add to Cart');
            btn.data('prod', {
                that: indexofProduct++,
                sku: element.sku,
                title: element.title,
                price: element.price,
                divname: selector,
                myCart: cart
            });
            btn.click(function() {
                cart.addItem($(this).data('prod'));
            }).appendTo(newDiv);
            newDiv.appendTo($("#" + selector));
        });
    }
    //title, price, Productselector

}
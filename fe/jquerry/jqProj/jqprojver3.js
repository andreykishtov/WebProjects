shop(products, "newCart");



function shop(products, cartSelector) {

    var cart = (function(selector) {
        createTable(selector);

        (function(element) {
            var originalY = element.offset().top;
            var topMargin = 20;
            $(window).on('scroll', function(event) {
                var scrollTop = $(window).scrollTop();
                element.stop(false, false).animate({
                    top: scrollTop < originalY ?
                        0 : scrollTop - originalY + topMargin
                }, 300);
            });
        })($("#" + cartSelector));


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
            if ($("#" + sku).length) {
                AddToCreatedRow($("#" + sku), true)
                totalChange("#" + selector + "-end");
            } else {
                createRow("#" + selector + "-end", 5, '<td>', ['X', title, '<input type="number" value="1">', price, price], "<tr id=" + sku + ">");
                $("#" + sku).find("td:nth-child(1)").click(function() {
                    removeItem(sku);
                });
                totalChange("#" + selector + "-end");
                $("#" + sku).change(function() {
                    AddToCreatedRow($("#" + sku), false, selector);
                });
            }


            function createRow(tableId, howmanyinrow, tdorth, data, tr) {
                var tRow;
                var tCell;
                var cellindex = 0;
                if (tr == undefined) {
                    tr = '<tr>';
                }
                $.each(data, function(i) {
                    if (!(i % howmanyinrow)) tRow = $(tr);
                    tCell = $(tdorth).html(data[i]);
                    tCell.addClass(selector + "-" + cellindex++);
                    (tRow.append(tCell)).insertBefore($(tableId));
                });
            }

        }

        function AddToCreatedRow(skuId, add) { //id and check for add or onchange
            var value = skuId.find("td:nth-child(4)").text();
            var save = skuId.find("td:nth-child(5)");
            var howmany = skuId.find("td:nth-child(3) input").val();
            if (add) {
                skuId.find("td:nth-child(3) input").val(++howmany);
            }
            value = value.split("$");
            save.text("$" + (value[1] * howmany).toFixed(2));
            totalChange("#" + selector + "-end");
        }

        return { "addItem": addItem, "AddToCreatedRow": AddToCreatedRow };

        function totalChange(total) {
            var allcellsInput = $("." + selector + "-2" + " input");
            var allcellsPrice = $("." + selector + "-3");
            var totalObj = { count: [], price: [], total: [] };
            allcellsInput.each(function(index, value) {
                // console.log(index + ':' + $(value).val());
                totalObj.count[index] = $(value).val();
            });
            allcellsPrice.each(function(index, value) {
                totalObj.price[index] = removeDOllar($(value).text());
            });
            $(total + " td").each(function(index, value) {
                if (index == 2) {
                    $(value).text(calcTotal(totalObj.count).toFixed(2))
                }
                // $(value).text(totalObj.price[index]);
                if (index == 4) {
                    $(value).text("$" + calcTotalWithPrice(totalObj.count, totalObj.price).toFixed(2))
                }
            });

            function removeDOllar(params) {
                params = params.split("$");
                return params[1];
            }

            function calcTotal(objcount) {
                var total = 0;
                for (var ind = 0; ind < objcount.length; ++ind) {
                    total += parseInt(objcount[ind]);
                }
                return total;
            }

            function calcTotalWithPrice(objcount, objprice) {
                var total = 0;
                for (var ind = 0; ind < objcount.length; ++ind) {
                    total += objcount[ind] * objprice[ind];
                }
                return total;
            }
        }

        function removeItem(sku) {
            $("#" + sku).fadeOut("slow", function() {
                $("#" + sku).remove();
                totalChange("#" + selector + "-end");
            });
        }
    })(cartSelector);

    for (var i = 0; i < products.length; ++i) {
        var prod = products[i];
        var product = new ProductList(prod.items, prod.selector, cart);
    }
}

function ProductList(items, selector, cart) {

    var container = $(selector);
    items.forEach(function(element, i) {
        if (!element.sku) {
            element.sku = getRandomArbitrary(1111111111111111, 9999999999999999);
        }
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

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
(function($) {
    $.fn.shop = function(options, cartSelector) {
        var start = 1;
        var end = 9;
        var cart = (function(selector) {
            createTable(selector);
            ////////////////////////////////////cart location///////////////////////////////
            function createTable(selector) {
                createRow("#" + selector, 1, '<th colspan="5">', ['Cart']);
                createRow("#" + selector, 5, '<th>', ['', 'Product', 'Quantity', 'Price', 'Total']); //id //number of cells in row //
                createRow("#" + selector, 5, '<td>', ['Total', "", '0', "", "0"], '<tr id="' + selector + '-end">');
                createRow("#" + selector, 5, '<td rowspan="2" colspan="5">', ['<label id="labelform" for="submit-form" tabindex="0"><img src="checkout-logo-large.png" alt="submit"></label>'], '<tr id="' + selector + '-paypal">');
            }


            $("#submit-form").on("click", sendData);

            function Getdata() {
                var sendDataForPay = { "name": {}, "price": {}, "amount": {} };
                $(".newCart-1").each(function(i, element) {
                    sendDataForPay.name[i] = $(element).text();
                });
                $(".newCart-2 input").each(function(i, element) {
                    sendDataForPay.amount[i] = $(element).val();
                });
                $(".newCart-3").each(function(i, element) {
                    var value = $(element).text().split("$");
                    sendDataForPay.price[i] = value[1];
                });
                return sendDataForPay;
            }

            function sendData() {
                var data = Getdata();
                var number = 1;
                for (var key in data.name) {
                    var inputForm = $('<input type="hidden"  name="item_name_' + number + '"  value="' + data.name[key] + "_1" + '">');
                    inputForm.insertBefore($("#submit-form"));
                    inputForm = $('<input type="hidden" name="amount_' + number + '" value="' + data.price[key] + '">');
                    inputForm.insertBefore($("#submit-form"));
                    inputForm = $('<input type="hidden" name="quantity_' + number + '" value="' + data.amount[key] + '">');
                    inputForm.insertBefore($("#submit-form"));
                    ++number;
                }
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

            function addItem(sku, name, price) {
                if (typeof sku === 'object' && arguments.length === 1) {
                    name = sku.name;
                    price = sku.price;
                    sku = sku.sku;
                }
                if ($("#" + sku).length) {
                    AddToCreatedRow($("#" + sku), true)
                    totalChange("#" + selector + "-end");
                } else {
                    createRow("#" + selector + "-end", 5, '<td>', ['X', name, '<input type="number" value="1">', price, price], "<tr id=" + sku + ">");
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

            (function(element) {
                var originalY = element.offset().top;
                var topMargin = 20;
                $(window).on('scroll', function(event) {
                    var scrollTop = $(window).scrollTop();
                    element.stop(false, false).animate({
                        top: scrollTop < originalY ?
                            0 : scrollTop - originalY + topMargin
                    }, 200);
                });
            })($("#" + cartSelector));

            function totalChange(total) {
                var allcellsInput = $("." + selector + "-2" + " input");
                var allcellsPrice = $("." + selector + "-3");
                var totalObj = { count: [], price: [], total: [] };
                allcellsInput.each(function(index, value) {
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
                        total += parseFloat(objcount[ind]).toFixed(2);
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
            return { "addItem": addItem };

        })(cartSelector);
        ///////////////////////////////////////////////////////////////////////////////
        var that = this;
        loadfirsttime(that);

        function loadfirsttime() {
            if (options.ajax) {
                $.ajax({
                    url: options.products_load_url,
                    type: 'POST',
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    data: { from: 1, to: options.url_load_page_count },
                    success: function(data) {
                        that.product = new ProductList(data, $(that), cart, cartSelector);
                        loadData();
                    }
                });
                ///////////////////////////////////
                $(window).on('scroll', loadData); //////////////////////

                function loadData() {
                    options.ajax = 0;
                    if ($(window).scrollTop() >= $(that).height() - $(window).height()) {
                        $.ajax({
                            url: options.products_load_url,
                            type: 'POST',
                            dataType: 'json',
                            crossDomain: true,
                            cache: false,
                            data: { from: options.url_load_page_count + 1, to: options.url_load_page_count + 4 },
                            success: function(data) {
                                that.product = ProductList(data, $(that), cart, cartSelector);
                                options.url_load_page_count += 4;
                            }
                        });

                    }

                }


                var product;
            } else {

                products = options.products;
                for (var i = 0; i < products.length; ++i) {
                    var prod = products[i];
                    this.product = new ProductList(prod.items, $(this), cart, cartSelector);
                }
            }
        }
        ///////////////////////////////////////product list/////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        function ProductList(items, selector, cart, cartSelector) {
            var divList = $('<div id="after-"' + "NewProducts" + ">");
            items.forEach(function(element, i) {
                if (element.price.split("$").length == 1) {
                    element.price = "$" + element.price;
                }
                if (!element.sku) {
                    element.sku = getRandomArbitrary(1111111111111111, 9999999999999999);
                }
                var newDiv = $('<div>');
                $('<img/>', { class: 'imageCart', src: element.image }).appendTo(newDiv);
                $("<h2>", { class: 'NameOfItem', }).text(element.name).appendTo(newDiv);
                $("<p>", { class: 'pricePlaceHolder', }).text(element.price).appendTo(newDiv);
                var btn = $('<button>', { class: 'buttonCart', }).text('Add to Cart');
                btn.data('prod', {
                    sku: element.sku,
                    name: element.name,
                    price: element.price
                });
                btn.click(function() {
                    cart.addItem($(this).data('prod'));
                    flyToElement($(this).parent().find("img"), "#" + cartSelector);
                }).appendTo(newDiv);
                if (!options.ajax) {
                    newDiv.appendTo($("div#after-" + "NewProducts"));
                } else {
                    newDiv.appendTo(divList);
                    divList.appendTo(selector);

                }
            });


            function getRandomArbitrary(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }

            function flyToElement(flyer, flyingTo) {
                var divider = 3;
                var flyerClone = flyer.clone();
                $(flyerClone).css({ position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000 });
                $('body').append($(flyerClone));
                var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width() / divider) / 2;
                var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height() / divider) / 2;

                $(flyerClone).animate({ opacity: 0.4, left: gotoX, top: gotoY, width: $(flyer).width() / divider, height: $(flyer).height() / divider }, 700,
                    function() {
                        $(flyerClone).remove();
                    });
            }
        }
    }
})(jQuery);
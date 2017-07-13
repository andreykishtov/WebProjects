//create everything in jquery

/* ifi function that manages the shop

object cart{
addItem(sku,caption,price) //sku -makat //caption - koteret
getCart //only one cart for all product lists
}

productsList(prods,selector,cart)  //selector(#div) is where to put in div //prods are products object
*/

// function shop(products, cartSelector) {
//     var cart = (function(selector) {

//         return { addItem: addItem }
//     })(cartSelector);

//     for (var i = 0; i < products.length; ++i) {
//         var prod = products[i];
//         var product = new productList(prod.items, prod.title, prod.selector);
//     }

//     function productList(items, title, selector, cart) {
//         var container = $(selector);
//         // $("<h3>").text(title).appendTo(container);
//         // var prodContainer = $("<section>").appendTo(container);
//         items.forEach(function(element, i) {
//             // create the product div
//             var btn = $("<button>").text("Add to Cart");
//             btn.data("prod", { sku: element.sku, title: element.title, price: price })
//             btn.click(function(params) {
//                     cart.addItem($(this).data("prod"));
//                 })
//                 // add product div to container
//         });
//     }
// }

// function addItem(sku, title, price) {
//     if (typeof sku === "object" && arguments.length === 1) {
//         title = sku.title;
//         price = sku.price;
//         sku = sku.sku;
//     }

// }


// $.fn.countdown = function(selector) {
//     $(selector).text('{' + $(selector).text() + '}');
// }
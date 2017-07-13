$(document).ready(function() {
    createTable();
    createCart();
});
////////////////////////creates cart////////////////////
function createCart() {
    for (var index = 0; index < products.length; index++) {
        var product = products[index];
        var newDiv = $('<div>');
        $('<img/>', { class: 'imageCart', src: product.image, width: 100 }).appendTo(newDiv);
        $("<h2>", { class: 'NameOfItem', }).text(product.title).appendTo(newDiv);
        $("<p>", { class: 'pricePlaceHolder', }).text(product.price).appendTo(newDiv);
        $("<button>", { class: 'buttonCart', }).click(function() { addToCart($(this).parent(), products); }).text("Add To Cart").appendTo(newDiv);
        // $("button").countdown($("button"));
        newDiv.appendTo($("#gridmain"));
    }
}
//////////////////////add listener on button function//////////////////
//addthis
function addToCart(event, productObj) {
    var index = $("#gridmain div").index(event);
    var table = $("#tablecart").children();
    var flag = true;
    if ($("#rowid" + index).length) {
        // addToRow(index, true);
        changeByInput($("#rowid" + index), true);
        totalChange();
    } else { //if no rows added
        createRow(productObj[index], index);
        totalChange();
    }
}
//itemId = $(this).attr('data-id');
/////////////////////////adds row to function///////////////////
function createRow(obj, index) {
    var data = ['Remove', obj.title, '<input type="number" value="1">', obj.price, obj.price];
    var numRows = 5;
    var cellindex = 0;
    $.each(data, function(i) {
        if (!(i % numRows)) {
            tRow = $('<tr>');
        }
        tRow.attr("id", "rowid" + index);
        tCell = $('<td>').html(data[i]);
        tCell.addClass("cellClass" + cellindex++);
        tRow.append(tCell);
        tRow.insertBefore("#TotalMoney");
        //$('#tablecart tbody').append(tRow);
    });
    $("#rowid" + index).change(function() {
        changeByInput($(this));
    });
}
////////////////////////////////////adds products by input or button/////////////
function changeByInput(thisold, add) {
    var value = thisold.find("td:nth-child(4)").text();
    var save = thisold.find("td:nth-child(5)");
    var howmany = thisold.find("td:nth-child(3) input").val();
    if (add) {
        thisold.find("td:nth-child(3) input").val(++howmany);
    }
    save.text((value * howmany).toFixed(2));
    totalChange();
}
////////////////////////////changes total//////////////////////////////////
function totalChange() {
    var total = $("#TotalMoney");
    var allcellsInput = $(".cellClass2");
    var allcellsPrice = $(".cellClass3");
    var totalObj = { count: [], price: [], total: [] };
    $('.cellClass2 input').each(function(index, value) {
        // console.log(index + ':' + $(value).val());
        totalObj.count[index] = $(value).val();
    });
    $('.cellClass3').each(function(index, value) {
        totalObj.price[index] = $(value).text();
    });
    $('#TotalMoney td').each(function(index, value) {
        if (index == 2) {
            $(value).text(calcTotal(totalObj.count).toFixed(2))
        }
        // $(value).text(totalObj.price[index]);
        if (index == 4) {
            $(value).text(calcTotalWithPrice(totalObj.count, totalObj.price).toFixed(2))
        }
    });

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

function createTable() {
    createRow("#tablecart", 1, '<th colspan="5">', ['Cart']);
    createRow("#tablecart", 5, '<th>', ['', 'Product', 'Quantity', 'Price', 'Total']); //id //number of cells in row //
    createRow("#tablecart", 5, '<td>', ['Total', "", '0', "", "0"], '<tr id="TotalMoney">');

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
}
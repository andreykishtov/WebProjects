$(document).ready(function() {
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

        newDiv.appendTo($("#gridmain"));
    }
}
//////////////////////add listener on button function//////////////////
function addToCart(event, productObj) {
    var index = $("#gridmain div").index(event);
    var table = $("#tablecart").children();
    var flag = true;
    if ($("#rowid" + index).length) {
        // addToRow(index, true);
        changeByInput($("#rowid" + index), true);
    } else { //if no rows added
        createRow(productObj[index], index);
    }
}
itemId = $(this).attr('data-id');
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


function totalChange() {
    var total = $("#TotalMoney");
    var allcellsInput = $("cellClass2");
    var allcellsPrice = $("cellClass3");
}
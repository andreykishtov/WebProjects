$(document).ready(function() {
    for (var index = 0; index < products.length; index++) {
        var product = products[index];
        var newDiv = $('<div>');
        $('<img/>', { class: 'imageCart', src: product.image, width: 100 }).appendTo(newDiv);
        $("<h2>", { class: 'NameOfItem', }).text(product.title).appendTo(newDiv);
        $("<p>", { class: 'pricePlaceHolder', }).text(product.price).appendTo(newDiv);
        $("<button>", { class: 'buttonCart', }).click(function() { addToCart($(this).parent(), products); }).text("Add To Cart").appendTo(newDiv);

        newDiv.appendTo($("#gridmain"));
    }
});

//////////////////////add listener on button function//////////////////
function addToCart(event, productObj) {
    var index = $("#gridmain div").index(event);
    var table = $("#tablecart").children();
    var flag = true;
    if ($("#rowid" + index).length) {
        addToRow(index, productObj[index]);
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
    $("#rowid" + index).change(function(event) {
        changeByInput(event, $(this));
    });
}
//adds stuff to table
function addToRow(index, obj) {
    var tr;
    for (var j = 2; j < 5; j++) {
        tr = $("#rowid" + index + " .cellClass" + j);
        if (j == 2) {
            $("#rowid" + index + " .cellClass" + j + " input").val(1 + parseInt($("#rowid" + index + " .cellClass" + j + " input").val()));
        } else {
            tr.text((parseInt(tr.text()) + parseInt(obj.price)));
        }
    }
}

function changeByInput(event, thisold) {
    console.log(thisold.children()[3]);
    var x = thisold.children()[3];
    totalChange();
}


function totalChange(params) {

}
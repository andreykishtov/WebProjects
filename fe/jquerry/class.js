window.onload = function() {
    // var uls = document.getElementById("container");
    // for (var index = 0; index < uls.length; ++index) {
    //     var lis = uls[index].getElementsByTagName("li");
    //     for (var j = 0; j < array.length; j++) {
    //         var li = lis[j];
    //         li.style.backgroundColor = "black";
    //         li.style.color = "white";
    //     }
    // }

    $("#container ul.change-me li:last").css({ color: "white", backgroundColor: "black" });
}


// same as window onload
$(document).ready(function() {});

// happends before window onload
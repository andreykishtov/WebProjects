var select = document.getElementById("selectInput");
var options = document.getElementsByTagName("option");
var username = '2';
for (var index = 0; index < options.length; index++) {
    console.log(options[index].innerHTML);
    if (username === options[index].innerHTML) {
        select.remove(index);
    }
}
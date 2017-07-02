///////////////////////////onload function///////////////////
window.onload = function() {

    }
    //////////////////////////////////create Rectangle
function createRectangle(Oval) {
    var newDiv = document.createElement('div');
    newDiv.className = 'block';
    newDiv.style.backgroundColor = randomColor();
    newDiv.style.height = 20 + randomNumber(window.screen.height / 5) + "px";
    newDiv.style.width = 20 + randomNumber(window.screen.width / 5) + "px";
    newDiv.innerText = newDiv.style.height + " " + newDiv.style.width;
    newDiv.style.margin = 10;
    newDiv.style.maxWidth = window.screen.width + "px";
    newDiv.style.maxHeight = window.screen.height + "px";
    newDiv.style.position = "absolute";
    newDiv.style.left = 20 + randomNumber(window.screen.width / 4) + "px";
    newDiv.style.top = 20 + randomNumber(window.screen.height / 4) + "px";
    if (Oval) {
        newDiv.style.borderRadius = "50%";
    }
    createInnerDiv(newDiv);
    newDiv.addEventListener("click", clickonDiv);
    document.getElementById('sketch').appendChild(newDiv);
}
//////////////////////////////////////////create inner div
function createInnerDiv(referenceTODiv) {
    var innerDiv = [];
    for (var i = 1; i < 5; ++i) {
        innerDiv[i] = document.createElement('div');
        innerDiv[i].className = 'possition' + i;
        referenceTODiv.appendChild(innerDiv[i]);
    }
}
//////////////////////////////random number generator////////////////
function randomNumber(number) {
    return Math.round(Math.random() * number);
}
////////////////////////////random color rgb generator
function randomColor() {
    var color = "#";
    for (k = 0; k < 3; k++) {
        color += ("0" + (Math.random() * 256 | 0).toString(16)).substr(-2);
    }
    return color;
}
/////////////////////////change Color/////////////////////
function changeColor(colorString) {
    var selected = document.getElementsByClassName("selected");
    for (var i = 0; i < selected.length; ++i) {
        selected[i].style.backgroundColor = colorString;
    }
}
/////////////////////////Add Id///////////////////////////
function clickonDiv() {
    var selected = document.getElementsByClassName("selected");
    if (!selected) {
        selected = {};
    }
    if (!event.ctrlKey) {
        for (var i = 0; i < selected.length; ++i) {
            if (this != selected[i]) {
                selected[i--].classList.remove("selected");
            }
        }
    }
    this.classList.toggle("selected");
    ////////////////////////////adds listener to mouse down;
    if (selected.length > 0)
        for (var i = 0; i < selected.length; ++i) {
            selected[i].addEventListener('mousedown', moveElement);
            for (var j = 0; j < selected[i].children.length; ++j) {
                selected[i].children[j].addEventListener('mousedown', resize);
            }
        }
}
///////movement initializer with 2 functions//////////////////////////////////////////
function moveElement(movemouse) {
    movemouse.preventDefault();
    var diffX = movemouse.clientX - this.offsetLeft;
    var diffY = movemouse.clientY - this.offsetTop;
    this.addEventListener('mouseup', stopDrag);
    this.addEventListener('mousemove', moveAlong);
    ////////////////////check mouse possition and sets element position on main div///////////////////////
    function moveAlong(movemouse) {
        movemouse.preventDefault();
        var left = parseInt(movemouse.clientX - diffX);
        var top = parseInt(movemouse.clientY - diffY);
        if (top < 0) {
            top = 0;
        }
        if (left < 0) {
            left = 0;
        }
        if (top > window.innerHeight - 1) {
            top = window.innerHeight - 1;
        }
        if (left > window.innerWidth - 1) {
            left = window.innerWidth - 1;
        }
        this.style.left = left + 'px';
        this.style.top = top + 'px';
    }
    ////////////////////////////ends loop inside/////////////////////
    function stopDrag() {
        this.removeEventListener('mousemove', moveAlong);
        this.removeEventListener('mouseup', stopDrag);
    }
}
/////////////////////resize/////////////////////////////////////////////
function resize(eventmouse) {
    eventmouse.preventDefault();
    this.addEventListener('mouseup', stopMovement);

    console.log(this);



    /////////////////////////stopsLoop///////////////////////////
    function stopMovement() {
        this.removeEventListener('mouseup', stopMovement);
    }
}
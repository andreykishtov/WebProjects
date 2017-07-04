//foo
//creator Andrey
///////////////////////////onload function///////////////////
window.onload = function() {
    sketchBoard();
}

function sketchBoard() {

    var userStorage = []; //Global storage;
    var domElements = {};

    connectDomElements();

    registerEvents();
    loadCanvas();

    function connectDomElements() {
        var ids = ["saveselect", "sketch"];
        for (i = 0; i < ids.length; ++i) {
            var id = ids[i];
            domElements[id] = document.getElementById(id);
        }
    }

    function registerEvents() {
        document.getElementById("savebutton").addEventListener("click", saveItem);
        document.getElementById("loadbutton").addEventListener("click", loadItem);

        document.getElementsByClassName("close")[0].addEventListener("click", closeDialog);
        document.getElementsByClassName("close")[1].addEventListener("click", closeDialog);

        document.getElementById("rectangle").addEventListener("click", createRect);
        document.getElementById("oval").addEventListener("click", createOval);

        document.getElementById("deletedivbutton").addEventListener("click", DeleteDiv);

        listenToColorButtons();
    }

    function listenToColorButtons() {
        var colorButtons = document.querySelectorAll('#colors button');
        for (var i = 0; i < colorButtons.length; ++i) {
            colorButtons[i].addEventListener("click", changeColor);
        }
    }

    /////////////////////////////////////function CreateObject///////////////////////
    function createRect() {
        var newDiv = { style: {} };
        var temp = window.screen.width;
        newDiv.className = 'block';
        newDiv.style.backgroundColor = randomColor();
        newDiv.style.height = randomNumber(window.screen.height / 4) + "px";
        newDiv.style.width = randomNumber(window.screen.width / 4) + "px";
        newDiv.style.margin = "10px";
        newDiv.style.maxWidth = window.screen.width + "px";
        newDiv.style.maxHeight = window.screen.height + "px";
        newDiv.style.position = "absolute";
        newDiv.style.left = randomNumber(window.screen.width / 2) + "px";
        newDiv.style.top = 20 + randomNumber(window.screen.height / 2) + "px";
        newDiv.style.minHeight = "50px";
        newDiv.style.minWidth = "50px";
        if ((parseInt(newDiv.style.width) + parseInt(newDiv.style.left)) > parseInt(window.screen.width)) {
            newDiv.style.left = randomNumber(300) + "px";
        }
        userStorage[userStorage.length] = newDiv;
        creatShapeDiv(newDiv);
        //console.log(userStorage);
    }
    /////////////////////////////////////////////////
    function createOval() {
        var newDiv = { style: {} };
        newDiv.className = 'block';
        var temp = window.screen.width;
        newDiv.style.backgroundColor = randomColor();
        newDiv.style.height = randomNumber(window.screen.height / 4) + "px";
        newDiv.style.width = randomNumber(window.screen.width / 4) + "px";
        newDiv.style.margin = 10;
        newDiv.style.maxWidth = window.screen.width + "px";
        newDiv.style.maxHeight = window.screen.height + "px";
        newDiv.style.position = "absolute";
        newDiv.style.left = randomNumber(window.screen.width / 2) + "px";
        newDiv.style.top = randomNumber(window.screen.height / 2) + "px";
        newDiv.style.borderRadius = "50%";
        newDiv.style.minHeight = "50px";
        newDiv.style.minWidth = "50px";
        if ((parseInt(newDiv.style.width) + parseInt(newDiv.style.left)) > parseInt(window.screen.width)) {
            newDiv.style.left = randomNumber(300) + "px";
        }
        userStorage[userStorage.length] = newDiv;
        creatShapeDiv(newDiv);
    }
    //////////////////////////////////create Rectangle
    function creatShapeDiv(createShape) {
        var newDiv = document.createElement('div');
        newDiv.className = createShape.className;
        newDiv.style.backgroundColor = createShape.style.backgroundColor
        newDiv.style.height = createShape.style.height;
        newDiv.style.minHeight = createShape.style.minHeight;
        newDiv.style.minWidth = createShape.style.minWidth;
        newDiv.style.width = createShape.style.width;
        newDiv.style.margin = createShape.style.margin;
        newDiv.style.maxWidth = createShape.style.maxWidth;
        newDiv.style.maxHeight = createShape.style.maxHeight;
        newDiv.style.position = createShape.style.position;
        newDiv.style.left = createShape.style.left;
        newDiv.style.top = createShape.style.top;
        if (createShape.style.borderRadius) { // check
            newDiv.style.borderRadius = createShape.style.borderRadius;
        }
        createInnerDiv(newDiv);
        newDiv.addEventListener("click", clickonDiv);
        domElements.sketch.appendChild(newDiv);
    }
    //////////////////////////////////////////create inner div
    function createInnerDiv(referenceTODiv) {
        var innerDiv = [];
        for (var i = 1; i < 5; ++i) {
            innerDiv[i] = document.createElement('div');
            innerDiv[i].className = 'possition' + i;
            innerDiv[i].style.backgroundColor = "white";
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
            selected[i].style.backgroundColor = colorString.target.id;
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
        if (selected.length > 0) {
            for (var i = 0; i < selected.length; ++i) {
                //  selected[i].addEventListener('keydown', DeleteDiv); //delete key
                selected[i].addEventListener('mousedown', movemorethan1);
                for (var j = 0; j < selected[i].children.length; ++j) {
                    selected[i].children[j].addEventListener('mousedown', resize);
                }
            }
        }
    }
    ///////movement initializer with 2 functions//////////////////////////////////////////
    function movemorethan1(mousepoint) {
        var selected = document.getElementsByClassName("selected");
        moveElement(selected[0].target);
        //moveElement(selected[1]);
    }


    function moveElement(movemouse) {
        //if (movemouse.currentTarget.className != "block selected") {
        //    return;
        // }
        //movemouse.preventDefault();
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
            this.removeEventListener('mousedown', moveElement);
        }
    }
    /////////////////////resize/////////////////////////////////////////////
    function resize(eventmouse) {
        eventmouse.stopPropagation();
        this.addEventListener('mouseup', stopMovement);
        this.addEventListener('mousemove', resizeBigDiv);
        //////////////////////////////////////////////////////
        function resizeBigDiv(movemouse) {
            var header = document.getElementsByTagName("header");
            movemouse.preventDefault();
            if (movemouse.currentTarget.className == 'possition4') { //Right Down
                this.parentNode.style.height = movemouse.clientY - parseInt(this.parentNode.style.top) - parseInt(header["0"].scrollHeight) + "px";
                this.parentNode.style.width = movemouse.clientX - parseInt(this.parentNode.style.left) + "px";
            }
            if (movemouse.currentTarget.className == 'possition2') { //Left Down
                this.parentNode.style.height = movemouse.clientY - parseInt(this.parentNode.style.top) - parseInt(header["0"].scrollHeight) + "px";
                this.parentNode.style.width = parseInt(this.parentNode.style.width) + parseInt(this.parentNode.style.left) - movemouse.clientX + "px";
                this.parentNode.style.left = movemouse.clientX + "px";
            }
            if (movemouse.currentTarget.className == 'possition3') { //Right Up
                this.parentNode.style.width = movemouse.clientX - parseInt(this.parentNode.style.left) + "px";
                this.parentNode.style.height = parseInt(this.parentNode.style.height) - movemouse.clientY +
                    parseInt(this.parentNode.style.top) + parseInt(header["0"].scrollHeight) + "px";
                this.parentNode.style.top = movemouse.clientY - parseInt(header["0"].scrollHeight) + "px";
            }
            if (movemouse.currentTarget.className == 'possition1') { //Left Up
                this.parentNode.style.height = parseInt(this.parentNode.style.height) - movemouse.clientY +
                    parseInt(this.parentNode.style.top) + parseInt(header["0"].scrollHeight) + "px";
                this.parentNode.style.top = movemouse.clientY - parseInt(header["0"].scrollHeight) + "px";
                this.parentNode.style.width = parseInt(this.parentNode.style.width) + parseInt(this.parentNode.style.left) - movemouse.clientX + "px";
                this.parentNode.style.left = movemouse.clientX + "px";
            }
        }
        /////////////////////////stopsLoop/////////////////////////////////
        function stopMovement() {
            this.removeEventListener('mouseup', stopMovement);
            this.removeEventListener('mousemove', resizeBigDiv);
            this.removeEventListener('mousedown', resize);
        }
    }
    ////////////////////////////////////////////delete Item///////////////
    function DeleteDiv() {
        var deleteItem = document.getElementsByClassName("selected");
        while (deleteItem.length) {
            deleteItem["0"].parentNode.removeChild(deleteItem["0"]);
        }
    }
    //////////////////////////////////////Save Load///////////////////
    function saveItem() {
        var closeMenu = document.getElementById("saveDiv");
        closeMenu.style.display = "block";
        var greydiv = document.getElementById("greyDiv");
        greydiv.style.display = "block";
        var savekeypress = document.getElementById("savebuttonlocal");
        savekeypress.addEventListener("click", saveItemPressed)
    }
    /////////////////////////////save listener///////////////////////
    function saveItemPressed(event) {
        if (!localStorage["list"]) {
            localStorage["list"] = JSON.stringify({});
        }
        var name = event.path[1].children["0"].value;
        var list = JSON.parse(localStorage["list"]);
        list[name] = userStorage;
        if (!localStorage["order"]) {
            localStorage["order"] = JSON.stringify([]);
        }
        var listorder = JSON.parse(localStorage["order"]);
        listorder.push(name);
        localStorage["order"] = JSON.stringify(listorder);
        localStorage["list"] = JSON.stringify(list);
        confirmsaved(name, event);
    }
    //////////////////////////////////////load Function/////////////////
    function loadItem() {
        var closeMenu = document.getElementById("loadDiv");
        var greydiv = document.getElementById("greyDiv");
        greydiv.style.display = "block";
        closeMenu.style.display = "block";
        if (!localStorage["list"]) {
            localStorage["list"] = JSON.stringify({});
        }
        var list = JSON.parse(localStorage["list"]);
        var found = 1;
        for (var index in list) {
            for (var j = 0; j < domElements.saveselect.options.length; ++j) {
                if (domElements.saveselect.options[j].text == index) {
                    found = 0;
                }
            }
            if (found) {
                var option = document.createElement("option");
                var text = document.createTextNode(index);
                option.appendChild(text);
                domElements.saveselect.appendChild(option);
                var loadkeypressed = document.getElementById("loadbuttonid");
                loadkeypressed.addEventListener("click", loadFromDialog)
            }
            found = 1;
        }
        if (!localStorage["order"]) {
            return;
        }
        var order = JSON.parse(localStorage["order"]);
        domElements.saveselect.value = order[order.length - 1];
    }
    /////////////////////////load key press//////////////////////////////////
    function loadFromDialog(event) {
        var name = event.path[1].childNodes[1].value;
        closeDialog(event);
        loadCanvas(name);
    }

    function loadCanvas(name) {
        if (!localStorage["list"] || !localStorage["order"]) {
            return;
        }
        removecanvas();

        loadCanvasByName(name);
    }

    function loadCanvasByName(name) {
        var list = JSON.parse(localStorage["list"]);
        var listorder = JSON.parse(localStorage["order"]);
        if (!name) { //load at start
            var person = list[listorder[listorder.length - 1]];
        } else {
            var person = list[name];
        }
        for (var index in person) {
            creatShapeDiv(person[index]);
        }
    }
    //////////////////////////////remove main div///////////////////////
    function removecanvas() {
        domElements.sketch.innerHTML = "";
    }
    ///////////////////////////////////delete element//////////////////
    window.onkeypress = function(event) {
            if (event.keyCode == 127) {
                DeleteDiv();
            }
        }
        ///////////////////////////////////////////////close menu///////////////
    function closeDialog(event) {
        var closeMenu = document.getElementById(event.target.parentNode.parentNode.id);
        closeMenu.style.display = "none";
        var greydiv = document.getElementById("greyDiv");
        greydiv.style.display = "none";
    }
    //////////////////////////////////delay//////////////////////////////////////
    function confirmsaved(nameofdiv, event) {
        var greydiv = document.getElementById("greyDiv");
        closeDialog(event);
        var taxtext = document.getElementById("hofsaveDiv");
        var saveddiv = document.getElementById("savedDiv");
        saveddiv.style.display = "block";
        var timeoutdiv = setTimeout(createdDivFortimeout, 3000);
        var temp = taxtext.innerText;
        taxtext.innerText += " " + nameofdiv;
        greydiv.style.display = "block";
        saveddiv.addEventListener("click", cleartimeoutdiv);

        //////////////////////////////////////timeout/////////////////////
        function createdDivFortimeout() {
            saveddiv.style.display = "none";
            saveItem();
            saveddiv.removeEventListener("click", cleartimeoutdiv);
            taxtext.innerText = temp;
        }
        //////////////////////////////////clicked before timeout////////////
        function cleartimeoutdiv() {
            clearTimeout(timeoutdiv);
            saveddiv.style.display = "none";
            saveItem();
            saveddiv.removeEventListener("click", cleartimeoutdiv);
            taxtext.innerText = temp;
        }
    }
}
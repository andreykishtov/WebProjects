    // //////////////////////////////////////////////////////////////

    var checked = document.getElementsByTagName("ul");
    checked[0].addEventListener("click", colorIt);
    checked[1].addEventListener("click", colorIt);
    var appen = document.getElementsByTagName("button");
    appen[0].addEventListener("click", buttonpress)
    appen[1].addEventListener("click", buttonpress)
        ////////////////////////////////////////////////////////////////
    function colorIt(clicktarget) {
        if (clicktarget.target.tagName === "LI") {
            clicktarget.target.classList.toggle("suman");
        }
    }
    ////////////////////////////////////////////////////////////
    function buttonpress(clickbutton) {
        var go = document.getElementsByClassName("suman");
        var child = [];
        for (var j = 0; j < go.length; ++j) {
            child[j] = go[j];
        }
        where = go[0].parentNode.id;
        if (where == "ul1") {
            where = "ul2";
        } else {
            where = "ul1";
        }
        while (child[0]) {
            child[0].classList.toggle("suman");
            document.getElementById(where).appendChild(child[0]);

        }
    }
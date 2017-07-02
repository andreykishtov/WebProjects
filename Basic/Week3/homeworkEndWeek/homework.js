//////////////////////////onload main function///////////////////////////////
window.onload = function() {
        var formSave = document.getElementsByTagName("form");
        for (var j = 0; j < formSave.length; ++j) {
            var input = formSave[j].getElementsByTagName("input");
            if (!formSave[j].id) {
                formSave[j].id = "form-save-values";
            }
            getElemntsFromStorage(input, formSave[j].id);
            for (var i = 0; i < input.length; ++i) {
                var forsaved = input[i];
                forsaved.onchange = saveinlocal;
            }
        }
    }
    /////////////////////////save in local storage function////////////////////////////////////
function saveinlocal() {
    console.log();
    var saveToLocObject = JSON.parse(localStorage[this.form.id]);
    saveToLocObject[this.name] = this.value;
    localStorage[this.form.id] = JSON.stringify(saveToLocObject);
}
//////////////////////////////////////loadfromstorage;
function getElemntsFromStorage(referenceToInput, idOFformInFunc) {
    if (!localStorage[idOFformInFunc]) {
        var saveToLocObject = {};
        localStorage[idOFformInFunc] = JSON.stringify(saveToLocObject);
    } else {
        var AllObj = JSON.parse(localStorage[idOFformInFunc]);
        for (var index in AllObj) {
            referenceToInput[index].value = AllObj[index];
        }
        localStorage[idOFformInFunc] = JSON.stringify(AllObj);
    }
}
function showFullName() {

    console.log(this.fname + " " + this.lname)
}



function makePerson(fname, lname, age) {
    var newPerson = {};
    newPerson.fname = fname;
    newPerson.lname = lname;
    newPerson.age = age;
    newPerson.age = age;
    newPerson.showFullName = showFullName;
    return newPerson;
}

var p1 = makePerson("Dave", "Peterson", 35);
var p2 = makePerson("julien", "Mishon", 35);
var p3 = makePerson("Andrey", "Kishtov", 32);

p1.showFullName.call(p2);
p2.showFullName();
p3.showFullName();

var sfn =p1.showFullName.bind(p3);
sfn();
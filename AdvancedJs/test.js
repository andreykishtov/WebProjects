function Person(name) {
    this.name = name;
}

Person.prototype.alertName = function() {
    console.log(this.name);
}

Person.prototype.remindName = function(period) {
    setTimeout(this.alertName.bind(this), period);
}

var p = new Person("Andrey");
//p.alertName();
p.remindName(100);
function Expression(expretion) {
    this.expretion = expretion || '0';
}

Expression.prototype.evaluate = function() {
    return this.value;
}

function Value(number) { return this.value = number; };
Value.prototype = Object.create(Expression.prototype);

function Add(expretion1, expretion2) {
    return this.value = expretion1.value + expretion2.value;
};

function minus(expretion1, expretion2) {
    if (expretion1 > expretion2) {
        return this.value = expretion1.value - expretion2.value;
    } else {
        return this.value = expretion2.value - expretion1.value;
    }
}

function pow(expretion) {
    return this.value = expretion * expretion;
}

function kefel(expretion1, expretion2) {
    return this.value = expretion1 * expretion2;
}


Add.prototype = Object.create(Expression.prototype);
var val8 = new Value(8);
var val5 = new Value(5);
var val2 = new Value(2);
var add1 = new Add(val2, val8);
var addAll = new Add(val5, add1);
console.log(addAll.evaluate());
console.log(val2)



// function Dog(name) {
//     this.teeth = 'sharp';
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype); // OK
// Dog.prototype.props = function() {
//     var str = Animal.prototype.props.call(this);
//     return str + ' teeth: ' + this.teeth;
// }
// Dog.prototype.constructor = Dog; // repair the inherited constructor

// var dog = new Dog('Kobi');
// dog.say();

// console.log('dog instanceof Dog: ' + (dog instanceof Dog));
// console.log('dog instanceof Animal: ' + (dog instanceof Animal));

// console.log('CTOR is Dog: ' + (dog.constructor === Dog));
// console.log('CTOR is Animal: ' + (dog.constructor === Animal));

// console.log('CTOR is Dog: ' + (Dog.prototype.constructor === Dog));
// console.log('CTOR is Animal: ' + (Dog.prototype.constructor === Animal));

// var animal = {
//   name: 'noname',
//   props: function() { return ''; },
//   say: function() {
//     console.log("Animal name: " + this.name + this.props());
//   }
// };
//Dog.prototype = Object.create(animal);

// var rabbit = {
//   ears: 'long',
//   name: 'bugs',
//   props: function() { return ' ears: '+this.ears; },
//   __proto__: animal
// };

// rabbit.say();
// animal.say();
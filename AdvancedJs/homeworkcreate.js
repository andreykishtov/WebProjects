function Expression(value) {
    this.value = value;
}
//returns real number
Expression.prototype.evaluate = function() {
    return this.value;
}

function Value(number) {
    Expression.call(this, number);
};
Value.prototype = Object.create(Expression.prototype);

function Add(expretion1, expretion2) {
    Expression.call(this, expretion1.evaluate() + expretion2.evaluate());
};
Add.prototype = Object.create(Expression.prototype);
console.log((new Add(new Value(5), (new Add(new Value(2), new Value(8))))).evaluate())

function minus(expretion1, expretion2) {
    Expression.call(this, expretion1.evaluate() - expretion2.evaluate());
}
minus.prototype = Object.create(Expression.prototype);

function multiply(expretion) {
    Expression.call(this, expretion.evaluate() * expretion.evaluate());
}
pow.prototype = Object.create(Expression.prototype);

function pow(expretion, howmany) {
    for (var index = 0; index < howmany; index++) {
        var full = multiply(expretion).evaluate();
    }
}
kefel.prototype = Object.create(Expression.prototype);



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
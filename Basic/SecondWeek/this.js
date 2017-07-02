/*var o1 ={
    name:"Eagle",
    show(){
        console.log(this.name);
    }
};

console.log(o1);

function a(){
    b();
    console.log(this.x="y");
}

*/

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2
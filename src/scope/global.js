// variables

var a; //declaramos la variable a
var b = 'b'; //declaramos la variable b y le asignamos el valor 'b'
b = 'bb'; //re-asignamos el valor de la variable b
var a = 'aa'; //re-declaracion de la variable a

//Global scope
var fruit = 'Apple'; // Global
console.log(fruit);

function bestFruit() {
	console.log(fruit);
}

bestFruit();

function countries() {
	country = 'Mexico'; // Global
	console.log(country);
}

countries();
console.log(country);

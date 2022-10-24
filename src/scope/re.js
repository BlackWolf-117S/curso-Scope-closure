var firstName; // undefined
firstName = 'Beto';
console.log(firstName);

var lastName = 'Islas'; // declarar e inicializar
lastName = 'Mondragon'; // reasignar
console.log(lastName);

var secondName = 'Alberto'; // declarar e inicializar
var secondName = 'Alberto Islas'; // redeclarar
console.log(secondName);

// Let
let fruit = 'apple'; // declarar e inicializar
fruit = 'orange'; // reasignar
//let fruit = 'banana'; //! Con let no se puede redeclarar

// Const
const animal = 'dog'; // declarar e inicializar
//animal = 'cat'; //! Con const no se puede reasignar
//const animal = 'cat'; //! Con const no se puede redeclarar
console.log(animal);

const vehicle = [];
vehicle.push('car');
console.log(vehicle);

vehicle.pop();
console.log(vehicle);

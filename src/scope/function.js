function greeting() {
	let userName = 'Beto';
	console.log(userName);

	if (userName === 'Beto') {
		console.log(`Hello ${userName}`);
	}
}

greeting();
console.log(userName); //? ReferenceError: userName is not defined ya que la variable userName solo existe dentro de la funcion greeting

function fruits() {
	if (true) {
		var fruity1 = 'Apple'; //* Global
		let fruity2 = 'Banana'; //? let solo existe dentro del bloque de codigo en el que fue declarada
		const fruity3 = 'Kiwi'; //? const solo existe dentro del bloque de codigo en el que fue declarada

		console.log(fruity2);
		console.log(fruity3);
	}
	console.log(fruity1);
	// console.log(fruity2); //! ReferenceError: fruity2 is not defined ya que la variable fruity2 solo existe dentro del bloque de codigo en el que fue declarada
	// console.log(fruity3); //! ReferenceError: fruity3 is not defined ya que la variable fruity3 solo existe dentro del bloque de codigo en el que fue declarada
}

fruits();

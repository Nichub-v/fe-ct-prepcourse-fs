class Gato{
	constructor(nombre, color, raza, edad){
		this.nombre = nombre
		this.color = color;
		this.raza = raza;
		this.edad = edad;
	}

	alimentar() {
		console.log("Alimentaste a " + this.nombre)
	}
}


let gato = new Gato("naranja", "mestizo", 2);

// HERENCIA

class Perro{
	constructor(){
		super(color, raza, edad); // propiedades a heredar de la clase gato
	}

	ladrar(){
		console.log("Woof")
	}
}
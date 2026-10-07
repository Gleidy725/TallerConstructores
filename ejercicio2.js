//Constructor
function Mascota(nombre,edad,peso,altura,especie){
    this.nombre=nombre;
    this.edad=edad;
    this.peso=peso;
    this.altura=altura;
    this.especie=especie;

    this.presentacion = function() {
        return `🐾 Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años, peso ${this.peso} kg, mido ${this.altura} cm y soy un/una ${this.especie}`
    }

}

//Creación de instancias
const mascota1= new Mascota("Bolt",4,12,40,"Perro");
const mascota2= new Mascota("Tomate",2,4,25,"Gato");
const mascota3= new Mascota("Yako",7,3,25,"Tortuga");

console.log(mascota1.presentacion());
console.log(mascota2.presentacion());
console.log(mascota3.presentacion());
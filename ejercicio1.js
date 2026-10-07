//Constructor
function Computador (id,nombre,marca,memoria, procesador, precio) {
  // "this" apunta al objeto que se está creando
  this.id = id;
  this.nombre=nombre
  this.marca = marca;
  this.memoria = memoria;
  this.procesador = procesador;
  this.precio = precio;
}

//Creación de instancias tipo computador
const pc1 = new Computador(634,"Maria Antonieta","LG","16 GB","i5","1200000");
const pc2 = new Computador(55,"Pablito","Lenovo","18 GB","i6","1900000");
const pc3 = new Computador(128,"Papitas fritas","Samsung","12 GB","i4","700000");

console.log(pc1);
console.log(pc2);
console.log(pc3);
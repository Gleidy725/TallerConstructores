function Estudiante(nombre,edad,curso,nota){
    this.nombre=nombre;
    this.edad=edad;
    this.curso=curso;
    this.nota=nota;

    this.mostrarResultado=function(){
        if(this.nota>=3.0){
            this.aprobado=true;
        }else{
            this.aprobado=false;
        }
        return `📓¡Hola ${this.nombre}, terminaste el curso de ${this.curso} y tu resultado fue Aprobado:${this.aprobado}!`
    }
}

const estudiante1=new Estudiante("Maria Antonieta",22,"Machine Learning",2.0);
const estudiante2=new Estudiante("José Miguel",28,"Ciberseguridad",3.0);
const estudiante3=new Estudiante("Laura Carina",35,"Cloud",3.8);
const estudiante4=new Estudiante("Martín Elías",17,"POO",2.5);

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());
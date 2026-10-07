function Libro(id,nombre,categoria,prestado){
    this.id=id;
    this.nombre=nombre;
    this.categoria=categoria;
    this.prestado=false;

    this.Prestar=function(){
        if(this.prestado=true){
            console.log("⚠️ Este libro ya fue prestado")
        }else{

            this.prestado=true;
        }
    }
    this.Devolver=function(){
        this.prestado=false;
    }
    return this.prestado;
}

const libro1= new Libro(1,"El jardin de las mariposas", "Terror");
const libro2= new Libro(2,"La cadena", "Suspenso");
const libro3=new Libro(3,"Las mil y una noches","Fantasía");

console.log("¿Se puede prestar?",libro1.Prestar());


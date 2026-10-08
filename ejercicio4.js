function Libro(id,nombre,categoria){
    this.id=id;
    this.nombre=nombre;
    this.categoria=categoria;
    this.prestado=false;

    this.Prestar=function(){
        if(this.prestado==true){
            console.log("⚠️ Este libro ya fue prestado");
        }else{
            console.log("¡Ya puedes llevarte el libro :)!")
            this.prestado=true;
        }
        return this.prestado;
    }
    this.Devolver=function(){
        if(this.prestado==false){
            console.log("⚠️ Error, este libro no fue prestado");
        }else{
            this.prestado=false;
            console.log("¡Gracias por regresar el libro",this.nombre,"!");
        }
        return this.prestado;
    }
}

const libro1= new Libro(1,"El jardin de las mariposas", "Terror");
const libro2= new Libro(2,"La cadena", "Suspenso");
const libro3=new Libro(3,"Las mil y una noches","Fantasía");

libro1.Prestar();
libro1.Prestar();
libro1.Devolver();
libro1.Devolver();


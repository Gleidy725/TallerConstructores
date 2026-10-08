const prompt = require('prompt-sync')();
function Vehiculo(modelo, marca, tipoVehiculo, cantidadDisponible) {
    this.modelo = modelo;
    this.marca = marca;
    this.tipoVehiculo = tipoVehiculo;
    this.cantidadDisponible = cantidadDisponible;
    this.enMantenimiento = false;

    this.vender = function () {
        if (typeof this.cantidadDisponible==="number"&&this.cantidadDisponible>0) {
            this.cantidadDisponible--;
            console.log("Transacción exitosa, uno menos, ahora somos", this.cantidadDisponible);
        } else {
            console.log("⚠️ Error:La cantidad disponible debe ser mayor a 0");
        }
    }

    this.presentarVehiculo = function () {
        if(typeof this.cantidadDisponible==="number"&&this.cantidadDisponible>0){
            console.log("🚗 Soy un/a", this.tipoVehiculo, "mi marca es: ", this.marca, "del modelo", this.modelo, "y solo somos:", this.cantidadDisponible, "disponibles. ¿Estoy en mantenimiento?:", this.enMantenimiento);
        }else{
            console.log("⚠️ Error:La cantidad disponible debe ser mayor a 0");
        }
    }

    this.hacerMantenimiento = function () {
        if (this.enMantenimiento == false && this.cantidadDisponible > 0) {
            this.enMantenimiento = true;
            console.log("¡Muy pronto estará/n como nuevo,  te contactaremos!");
        } else {
            console.log("⚠️ Error: Comprueba que haya disponibilidad de ese automóvil o que no esté ya en mantenimiento");
        }
    }


}
let modelo;
let marca;
let tipoVehiculo;
let cantidadDisponible;

const vehiculo1 = new Vehiculo(modelo = prompt("Modelo:"), marca = prompt("Marca:"), tipoVehiculo = prompt("Tipo de Vehiculo:"), cantidadDisponible = Number(prompt("Cantidad Disponible (solo números):")));
vehiculo1.presentarVehiculo();
vehiculo1.vender();
vehiculo1.hacerMantenimiento();
vehiculo1.hacerMantenimiento();

class Empleado {
    constructor(nombre, salario, puesto) {
        this.nombre = "Andres";
        this.salario = 2000000;
        this.puesto = "Jefe de Compras"
    }

    //Metodo incrementar salario
    incrementarSalario() {
        let aumento = this.salario * 0.25
        this.salario += aumento
        return  this.salario
    }

    //Metodo para mostrar la información
    mostrarInfo(){
        return `Su nombre es: ${this.nombre} ,su salario es: ${this.salario} y su puesto es: ${this.puesto}`;
    }
}

let empleado1 = new Empleado()
console.log(empleado1.incrementarSalario())
console.log(empleado1.mostrarInfo())
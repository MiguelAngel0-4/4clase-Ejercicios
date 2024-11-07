class Miguel{
    constructor(nombre, edad){
        this.nombre= "Miguel";
        this.edad= "20";
    }

    //Metodo mostrar datos
    mostrarDatos(){
        return `Su nombre es: ${this.nombre} y su edad es: ${this.edad}`;
    }
    //Metodo comprobacion de edad
    esmayordeEdad(){
        return this.edad>=18;
    }
    

}

let persona= new Miguel();
console.log(persona.mostrarDatos());
if (persona.esmayordeEdad()){
    console.log("Es mayor de edad");
}
else{
    console.log("No es mayor de edad");
}

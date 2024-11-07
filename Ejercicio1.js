class Rectangulo{
    constructor(ancho, alto){
        this.ancho=8;
        this.alto=4;
    }

    //metodo para calcular el area
    area(){
        return this.ancho * this.alto;
    }

    //metodo para calcular el perimetro
    perimetro(){
        return 2 * (this.ancho + this.alto);
    }
}

let rectangulo= new Rectangulo();
console.log("El Area del rectangulo es:",rectangulo.area());
console.log("El Perimetro del rectangulo es:",rectangulo.perimetro());

class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100
        this.velocidad = 3
        this.fuerza = 3
    }
    sayName(){
        console.log('\n'+this.nombre);
    }
    showStats(){
        console.log(`\nnombre: ${this.nombre}`);
        console.log(`fuerza: ${this.fuerza}`);
        console.log(`velocidad: ${this.velocidad}`);
        console.log(`salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud += 10
        console.log(`\nTomando sake...`)
        console.log(`Salud aumentada +10: ${this.salud}`)
    }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

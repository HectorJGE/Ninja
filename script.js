
class Ninja {
    constructor(nombre,salud=100,velocidad = 3,fuerza =3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
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

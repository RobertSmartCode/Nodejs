const depool = {
    nombre : "Wade",
    apellido : "Winston",
    poder : "Regeneración",
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


// const nombre=depool.nombre;
// const apellido=depool.apellido;
// const poder=depool.poder;

const {nombre, apellido, poder} = depool

console.log(nombre, apellido, poder);
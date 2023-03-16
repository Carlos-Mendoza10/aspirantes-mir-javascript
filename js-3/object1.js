let pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies:["programar", "squash", "piano"]
}
function ejercicio1(objeto){
    
    // punto 2
    let edad = objeto.edad
    console.log(edad)
    // punto 3
    objeto.estatura = 1.8
    // punto 4
    delete objeto.activo
    // punto 5
    for (let llave in objeto){
        if(objeto.hasOwnProperty(llave)){
            console.log(`${llave}:${objeto[llave]}`)
        }
    }
}
// punto 6
function saluda(objeto){
   console.log("Hola, me llamo " + objeto.nombre)
}

ejercicio1(pedro)
saluda(pedro)

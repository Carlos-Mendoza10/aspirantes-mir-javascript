//punto 1
let persona = {

    nombre : "Carlos Mendoza", 
    edad : 20, 
    ciudad : "Medellin", 
    profesion : "Medico",
}
// punto 2
console.log(persona)
// punto 3
function presentacion(persona){
    let respuesta =`${persona.nombre}, ${persona.edad} años, ${persona.ciudad}`
    return respuesta
}
// punto 4
let mensaje = presentacion(persona)
// punto 5
console.log(mensaje)
// punto 6
persona.hobbies = ["leer","puzzles","jugar","gym","pintar"]
// punto 7
console.log(persona.hobbies)
// punto 8
for(let i = 0; i< persona.hobbies.length; i ++){
    let pasatiempo = persona.hobbies[i]
    console.log(pasatiempo)
}

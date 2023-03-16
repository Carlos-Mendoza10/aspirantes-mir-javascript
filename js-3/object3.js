// punto 1
let receta ={

}
// punto 2
receta.nombre = "Sandwich"
// punto 3
receta.ingredientes = []
// punto 4
receta.ingredientes.push({nombre: "Pan", cantidad: 2})
// punto 5
receta.ingredientes.push({nombre: "Queso", cantidad: 1})
// punto 6
console.log(receta.ingredientes[0].nombre)
// punto 7
let totalCantidades = 0
for(let i = 0; i< receta.ingredientes.length; i++){
    totalCantidades = totalCantidades + receta.ingredientes[i].cantidad
}
console.log(totalCantidades)
// con el for podemos agregar nuevos ingredientes y el total de cantidad se calcula sin escribir
// mas codigo
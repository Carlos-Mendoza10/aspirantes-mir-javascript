function join(array){
    let respuesta = ""
    for (let i = 0; i < array.length ; i ++){
        let elemento = array[i]
        respuesta = respuesta + elemento.toString() + " "
    }
    let respuestafinal = respuesta.substring(0,respuesta.length-1) 
    // esta linea de codigo la puse por si se quiere cambiar el espacio en blanco por un "-" la respuesta
    // aparesca asi carlos-pedro-juan-carolina y no salga asi carlos-pedro-juan-carolina-
    // donde sale un guion al final. Asi funcionando igual que el método join.
    
    return respuestafinal
}

console.log(join(["carlos","pedro","juan","carolina"]))// carlos pedro juan carolina
console.log(join([1,2,3,4]))// 1 2 3 4
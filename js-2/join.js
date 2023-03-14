function join(array){
    let respuesta = ""
    for (let i = 0; i < array.length ; i ++){
        let elemento = array[i]
        if (i === array.length-1){
            respuesta = respuesta + elemento.toString()
        } else{
            respuesta = respuesta + elemento.toString() + " "
        }
        // con el if se comporta igual que el metodo join ya que si cambiamos el espacio en blanco
        // por "--" o cualquier otro simbolo se va ha separar bien.
    }
    
    return respuesta
}

console.log(join(["carlos","pedro","juan","carolina"]))// carlos pedro juan carolina
console.log(join([1,2,3,4]))// 1 2 3 4
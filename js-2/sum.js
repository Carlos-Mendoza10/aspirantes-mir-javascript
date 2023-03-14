function sum(array){
    let resultado = 0
    for (let i = 0; i < array.length ; i ++){
        let num1 = array[i]
        resultado = resultado + num1
    }
    return resultado
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
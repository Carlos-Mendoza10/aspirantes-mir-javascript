function sum(num){
    let resultado = 1
    for (let i = 1; i < num; i ++) {
        resultado = resultado + (i+1)
    }
    return resultado
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120
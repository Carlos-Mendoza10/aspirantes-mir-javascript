function max(array){
        let mayor = array[0]
        for (let i = 1; i < array.length ; i ++){
            let num2 = array[i]
            if(num2>mayor){
                mayor = num2
            }
        }
        return mayor
    }
    console.log(max([1, 3, 2])) // 3
    console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
    console.log(max([])) // undefined
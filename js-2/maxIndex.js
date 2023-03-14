function maxIndex(array){
        let mayor = array[0]
        let index = -1
        for (let i = 0; i < array.length ; i ++){
            let num2 = array[i]
            if(num2>=mayor){
                mayor = num2
                index = i

            }
        }
        return index
    }

    console.log(maxIndex([1, 3, 2])) // 1
    console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
    console.log(maxIndex([])) // -1
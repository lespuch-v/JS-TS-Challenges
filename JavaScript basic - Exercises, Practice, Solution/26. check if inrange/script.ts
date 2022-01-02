function checkIfInRange(value1: number, value2: number): boolean{
    let isTrue = false
    if(value1 >= 50 && value1 <= 99 || value2 >=50 && value2 <= 99){
        isTrue = true
    }else{
        isTrue = false
    }

    return isTrue
}

console.log(checkIfInRange(10, 50))
console.log(checkIfInRange(10, 10))
console.log(checkIfInRange(10, 20))
console.log(checkIfInRange(10, 99))
console.log(checkIfInRange(10, 99))
console.log(checkIfInRange(99, 10))
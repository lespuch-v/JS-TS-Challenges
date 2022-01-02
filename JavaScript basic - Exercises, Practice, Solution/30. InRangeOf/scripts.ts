function checkNumbers(value1: number,  value2:number): boolean{
    let isTrue = false
    if(value1 >= 40 && value1 <= 60 || value2 >= 70 && value2 <= 100){
        isTrue = true
    }else{
        isTrue = false
    }

    return isTrue
}


console.log(checkNumbers(50,30))
console.log(checkNumbers(10,20))
console.log(checkNumbers(90,50))

console.log(checkNumbers(44, 56))
console.log(checkNumbers(70, 95))
console.log(checkNumbers(50,89))


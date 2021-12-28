function checkNumber(num1: number, num2: number): boolean{
    if(num1 == 50 || num2 == 50){
        return true
    }else if(num1 + num2 == 50) {
        return true
    }else{
        return false
    }
}

console.log(checkNumber(20,50))
console.log(checkNumber(20,38))
console.log(checkNumber(20,10))
console.log(checkNumber(0,0))
console.log(checkNumber(10,10))
console.log(checkNumber(20,30))

console.log(checkNumber(50,50))
console.log(checkNumber(20,50))
console.log(checkNumber(20,20))
console.log(checkNumber(20,31))


function checkNumber(value1:number, value2: number): string{
    if(value1 < 0 || value2 < 0){
        return "one OR both of the numbers is NEGATIVE"
    }else{
        return "BOTH of the numbers is POSITIVE"
    }
}

console.log(checkNumber(10, 10))
console.log(checkNumber(-1, 10))
console.log(checkNumber(0, 10))
console.log(checkNumber(-54196196, -10))
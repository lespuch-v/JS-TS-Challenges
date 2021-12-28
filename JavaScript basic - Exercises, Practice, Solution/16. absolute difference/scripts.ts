function absDiff(num1: number, num2: number = 19): number{
    if(num1 <= num2){
        return num1 - num2
    }else {
        return (num1 - num2) * 3
    }
}


console.log(absDiff(12))
console.log(absDiff(19))
console.log(absDiff(22))
console.log(absDiff(100))
function arrTest(val1: number[]):boolean{
    let a, b
    [a, b] = [val1[0], val1[1]]
    if(a === 30 && b === 30 || a === 40 && b === 40){
        return true
    }else{
        return false
    }
    

}

console.log(arrTest([10, 20]))
console.log(arrTest([20, 20]))
console.log(arrTest([30, 30]))
console.log(arrTest([40, 40]))

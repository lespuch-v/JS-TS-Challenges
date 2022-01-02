function multipleCheck(num: number): boolean{
    let isMultiple = false

    if(num %3 == 0 || num %7 == 0){
        isMultiple = true
    }else{
        isMultiple = false
    }

    return isMultiple
}

console.log(multipleCheck(15))
console.log(multipleCheck(20))
console.log(multipleCheck(60))
console.log(multipleCheck(11))
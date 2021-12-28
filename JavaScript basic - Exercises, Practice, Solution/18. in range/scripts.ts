function checkNumber(val: number):boolean{
    if(val >= 20 && val < 100 || val == 400 ){
        return true
    }else{
        return false
    }

}
console.log(checkNumber(20))
console.log(checkNumber(19))
console.log(checkNumber(21))
console.log(checkNumber(99))
console.log(checkNumber(400))
console.log(checkNumber(156))
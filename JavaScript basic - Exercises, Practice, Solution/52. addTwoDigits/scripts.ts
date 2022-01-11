function addString(value: string): number{
    let num = 0
    
    if(value.length == 2){
        for(let i = 0; i < value.length; i++){
            num += parseInt(value[i])
        }
    }
    
    return num
}

console.log(addString("20"))
console.log(addString("19"))
console.log(addString("11"))
console.log(addString("111"))
console.log(addString("25"))
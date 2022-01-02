function inRange(value1: number, value2: number):any{
    if(value1 < 40 || value1 > 60 || value2 < 40 || value2 > 60){
        return "Ups.. Not in Range!"
    }else{
        if(value1 > value2){
            return value1
        }else{
            return value2
        }
    }
}

console.log(inRange(10,10))
console.log(inRange(40,59))
console.log(inRange(40,60))
console.log(inRange(55, 41))
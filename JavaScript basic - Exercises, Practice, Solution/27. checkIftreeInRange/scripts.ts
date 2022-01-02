function numCheckTree(value1: number,  value2: number, value3: number):boolean{
    if(value1 >=50 && value1 <= 99 || value2 >=50 && value2 <=99 || value3 >=50 && value3 <=99){
        return true
    }else{
        return false
    }
    
}


console.log(numCheckTree(50,10,60))
console.log(numCheckTree(1,1,1))
console.log(numCheckTree(1,1,50))
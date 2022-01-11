function arrayTest(num: number[]): any{
    if(num.length >= 2){
        for(let i = 0; i < num.length; i++){
            if(num[i] == 1 || num[i] == 3){
                return true
            }
        }
    }else{
        return false
    }
}

console.log(arrayTest([0,1,2,3,4,5]))
console.log(arrayTest([0,3]))
console.log(arrayTest([0]))
console.log(arrayTest([0,5,9,7,0,6,77,3]))
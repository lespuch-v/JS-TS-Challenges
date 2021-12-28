const givenNumber = 13

function calculateDifference(num1: number, num2: number = 12 ):number{
    if(num1 - num2 > num2){
        return (num1 - num2) * (num1 - num2)
    }else {
        return 12
    }
    
}

console.log(calculateDifference(25))
console.log(calculateDifference(20))
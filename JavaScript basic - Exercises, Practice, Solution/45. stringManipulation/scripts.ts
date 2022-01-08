function sumVluesInArray(arr: number[]):number{
    
    let sumValues = 0
    
    for(let i = 0; i < arr.length; i++){
        sumValues += arr[i]
    }
    return sumValues
}


console.log(sumVluesInArray([1,2,3,4,5,6]))
console.log(sumVluesInArray([1,2,3]))
console.log(sumVluesInArray([1,2]))

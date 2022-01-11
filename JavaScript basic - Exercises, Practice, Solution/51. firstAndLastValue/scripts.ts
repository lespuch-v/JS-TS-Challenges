function valueSwap(values: any[]):any{
    if(values.length <= 1){
        return "Ups... Array must be bigger than 1"
    }
    let firstValue = values.shift()
    let lastValue = values.pop()
    return [lastValue, ...values, firstValue]
}


console.log(valueSwap([1,2,3,4,5,6,7,8,9,0]))
console.log(valueSwap([10,20,30]))
console.log(valueSwap([10,20]))
console.log(valueSwap([10]))
console.log(valueSwap([100,90,80]))
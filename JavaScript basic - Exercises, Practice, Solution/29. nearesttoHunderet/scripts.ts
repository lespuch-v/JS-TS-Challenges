const arr1 = [0,1,2,3,4,5,6,78,9,10]
const arr2 = [10,20,30]
const arr3 = [80,20,30]

function NearestNumber(num: number[]): number{
    let value = 0

    for(let i = 0; i < num.length; i++){
        if(num[i] >= value){
            value = num[i]
        }
    }
    return value
}

console.log(NearestNumber(arr1))
console.log(NearestNumber(arr2))
console.log(NearestNumber(arr3))


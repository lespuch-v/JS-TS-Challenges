const arr1 = [1,2,3,4]
const arr2 = [1,2,3,60,95,12]
const arr3 = [10,20,30,40,50,60]
const arr4 = [99,88,77]

function getBiggestInt(num: number[]):number[]{


    num.sort((a, b)=> b - a )

    return num.slice(0,3)
}

console.log(getBiggestInt(arr1))
console.log(getBiggestInt(arr2))
console.log(getBiggestInt(arr3))
console.log(getBiggestInt(arr4))



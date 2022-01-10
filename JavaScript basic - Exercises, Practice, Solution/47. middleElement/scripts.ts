// Write a function that takes two arrays.
// take a middle position
// create new array from middle positons
function getMiddleValue(arr1: number[], arr2: number[]): number[] {
    let value1 = arr1[1]
    let value2 = arr2[2]
    const newArr = [value1, value2]

    

    return newArr
}


console.log(getMiddleValue([1,2,3], [3,4,5]))
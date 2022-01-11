function findTheLongestString(arr: string[]):string[]{
    let count = 0
    let newArr =[]
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > count){
            count = arr[i].length
            newArr.pop()
            newArr.push(arr[i])
        }
    }
    
    return newArr
}

console.log(findTheLongestString(["aaa", "aa", "aaaa", "aaaaaa", "a", "aaaa"]))

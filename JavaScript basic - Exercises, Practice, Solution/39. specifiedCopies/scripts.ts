function fiveTimes(word: string, num: number):string{
    let newString = ""
    
    for(let i = 0; i < num; i++){
        newString += word
    }
    
    return newString
}

console.log(fiveTimes("sXs",5))
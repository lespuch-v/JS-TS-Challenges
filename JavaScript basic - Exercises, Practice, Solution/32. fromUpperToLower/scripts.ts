function strConversion(word){
    let lowerLetter = ""
    let rest = ""

    if(word.length <= 3){
        return word.toUpperCase()
    }else{
        lowerLetter = word.slice(0,3).toLowerCase()
        rest = word.slice(3, word.length).toUpperCase()
    }
    return `${lowerLetter}${rest}`
}

console.log(strConversion("value"))
console.log(strConversion("abc"))
console.log(strConversion("Python"))
console.log(strConversion("py"))

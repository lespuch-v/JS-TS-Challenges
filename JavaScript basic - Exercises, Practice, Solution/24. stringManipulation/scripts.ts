function addStrings(word: string): string{
    let firstChar = ""
    let lastChar = ""
    let middleChar = ""

    if(word.length >= 3){
        // first section
        for(let i = 0; i <= 2; i++){
            console.log(word[i])
            firstChar += word[i]
        }
        // last section
        for(let i = 3 - 1; i >=0; i--){
            console.log(word[i])
            lastChar += word[i] 
        }
        // middle section
        for(let i = 3; i <= word.length - 3; i++){
            console.log(word[i])
            middleChar += word[i] 
        }
    }else{
        return "Ups.. String must be bigger than 3 characters"
    }
    return `${lastChar}${middleChar}${firstChar}`

}
console.log(addStrings("and"))
console.log(addStrings("Ahoj"))
console.log(addStrings("Ah"))
console.log(addStrings("HelloWorld"))


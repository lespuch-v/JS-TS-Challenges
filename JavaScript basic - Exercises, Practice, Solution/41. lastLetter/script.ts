function charactersOfTheString(str: string[]):string{
    if(str.length <= 3){
        console.log("word must be bigger than 3 character")
        return
    }
    let endChar = str.substring(str.length - 3)
    let startChar = str.substring(0, 3)
    
    return endChar + startChar
}

console.log(charactersOfTheString("ahoj"))
console.log(charactersOfTheString("aas"))
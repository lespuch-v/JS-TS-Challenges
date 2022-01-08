function extraction(word:string):any{
    
    let number = Math.floor(word.length / 2 )
    
    return word.substring(0, number)
}

console.log(extraction("ahoj"))
console.log(extraction("Ahoj, jak se mas"))
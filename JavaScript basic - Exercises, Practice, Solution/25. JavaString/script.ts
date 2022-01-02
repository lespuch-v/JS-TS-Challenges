function myString(word: string): boolean{
    const specialWord = "Java"
    let wordCheck = word.substring(0,4)

    if(word.length <3){
        return false
    }else if(wordCheck == specialWord){
        return true
    }else{
        return false
    }
}

console.log(myString("ahoj"))
console.log(myString("Java"))
console.log(myString("JavaScript"))
console.log(myString("Python"))
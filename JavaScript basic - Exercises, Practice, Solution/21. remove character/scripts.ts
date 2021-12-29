function removeCharacter(text: string, value: number): string{
    let newString = ""
    for(let i = 0; i < text.length; i++){
        if(i == value){
            newString += ''
        }else{
            newString += text[i]
        }
    }
    return newString
}
console.log(removeCharacter("ahoj", 2))
console.log(removeCharacter("ahoj", 0))
console.log(removeCharacter("ahoj", 3))
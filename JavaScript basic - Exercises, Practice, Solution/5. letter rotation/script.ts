function str(word: string): string{
    const newArray = []
    let letter = ""
    for(let i = word.length -1; i > 0; i--){
        letter = word[i]
        newArray.push(letter)
    }

    return newArray.join("")
}

console.log(str("hello World"))
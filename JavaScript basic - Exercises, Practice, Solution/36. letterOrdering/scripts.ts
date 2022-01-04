function WordSorting(word: string): string{
    const updatedValues = []
    const update = []

    for(let i = 0; i < word.length; i++){
        let charValue = word.charCodeAt(i)
        updatedValues.push(charValue)
    }
    updatedValues.sort(function(a, b){
        return b - a 
    })

    for(let i = 0; i < updatedValues.length; i++){
        let x = String.fromCharCode(updatedValues[i])
        update.push(x)
    }



    return update.join("")
}

console.log(WordSorting("ahoj"))
console.log(WordSorting("Ahoj, jak se mas a co vlastne delas?"))


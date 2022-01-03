function capitalLetter(word: string): string{

    let strArr = word.split(" ")

    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1)
    }

    return strArr.join(" ")
}

console.log(capitalLetter("hello world"))
console.log(capitalLetter("ahoj, jak se mas, a co vlastne delas?"))
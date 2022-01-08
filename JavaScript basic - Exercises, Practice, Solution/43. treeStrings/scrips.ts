function stringChecker(word1: string, word2: string):string{
    let newString = ""
    let secondWorccharNum = word2.length
    
    if(word1.length == word2.length){
        return word1 + word2
    }else{
        newString = `${word1.substring(0, secondWorccharNum.length)}${word2}`
    }
    
    return
}

console.log(stringChecker("ahoj", "jak"))
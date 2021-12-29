function changeString(word: string): string{
    const firstLetter = word[0]
    const lastLetter = word.charAt(word.length - 1)
    let middleSection = ""
    
    for(let i = 0; i < word.length; i++){
        if(i > 0 && i < word.length -1){
            middleSection += word[i]
        }
    }
    
    const finalWord = `${lastLetter}${middleSection}${firstLetter}`
    
    // console.log(middleSection)
    // console.log(firstLetter)
    // console.log(lastLetter)
    
    
    
    return finalWord
}


console.log(changeString("word"))
console.log(changeString("ahoj"))
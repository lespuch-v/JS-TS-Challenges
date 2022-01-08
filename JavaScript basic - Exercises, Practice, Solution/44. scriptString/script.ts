function stringCheck(word: string):string{
    if(word.length >= 6){
        if(word == "Script"){
            return "Script"
        }else{
            return "ups.."
        }
    }else{
        return "Its NOT a valid tring"
    }
    
}

console.log(stringCheck("ahoj"))
console.log(stringCheck("script"))
console.log(stringCheck("Script"))
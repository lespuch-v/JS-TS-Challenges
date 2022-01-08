function withoutString(text: string): string{
    let newText = text.substr(1, text.length -1 )
    
    return newText
}

console.log(withoutString("ahoj"))

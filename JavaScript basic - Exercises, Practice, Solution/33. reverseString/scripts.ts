function ReverseString(myText: string): string{
    let x = ""

    for(let i = myText.length -1; i >= 0; i--){
        x += myText[i]
    }

    return x
}

console.log(ReverseString("hello"))
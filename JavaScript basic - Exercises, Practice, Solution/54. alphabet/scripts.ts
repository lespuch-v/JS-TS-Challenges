const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function alphaReplace(text: string): string{
    let currentLetter = ""
    let indexArr = []
    const finalValue = []

    for(let i = 0; i < text.length; i++){
        currentLetter = text[i]
        indexArr.push(alphabet.indexOf(currentLetter)+1)
    }
    indexArr.forEach(element => {
        finalValue.push(alphabet[element])
    })

    return finalValue.join("")

}
console.log(alphaReplace("ahoj"))
console.log(alphaReplace("jak se mas xzzz "))
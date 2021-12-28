const value = 50

function converter(num: number):string[]{
    let celToFah = (num * (9/5))+32
    let FahToCel = (num - 32) * (5/9)


    return [`Celsius is: ${celToFah}`, `Fahrenheit: ${FahToCel}`]
}

console.log(converter(50))
function numberConvert(num: number):string{
    let hours = Math.floor(num / 60)
    let minutes = Math.floor(num % 60)

    return `Hours: ${hours} ${minutes}`
}

console.log(numberConvert(20))
console.log(numberConvert(123))
console.log(numberConvert(223))
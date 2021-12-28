let arr = ["java.js", "helloWorld.cs", "start.exe", "readme.md"]

function getExtension(value: string[]):string[]{
    const newArr = []

    value.forEach(word => {
        word.split(".")
        newArr.push(word.split(".")[1])
    })

    return newArr
}


console.log(getExtension(arr))
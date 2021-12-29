const a = ["a", "b", "Pyc", "Pyd", "e"]

function arrString(str: string[]):string[]{
    const newArr = []
    for(let i = 0; i < str.length; i++){
        if(str[i].slice(0,2) == "Py"){
            newArr.push(str[i])
           
        }else{
             newArr.push("Py"+ str[i])
        }
        
    }
    return newArr
}


console.log((arrString(a)))
function countVovel(arr){

 
    return arr.replace(/[^aeiou]/g, "").length; 
}

console.log(countVovel("ahoj, jak se mas?"))
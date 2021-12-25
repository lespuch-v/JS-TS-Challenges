const btn = document.getElementById("btn")
const inputText = document.getElementById("text")

btn.addEventListener("click", guesAnumber)

function genRandomNumber():number{

    return Math.round(Math.random() * 3)
}
console.log(genRandomNumber())

function guesAnumber(){
    if(inputText.value == genRandomNumber()){
        alert("Congratulations you have won")
    }else{
        console.log("Wrong guess")
    }
    
}








// Write a JavaScript program where the program takes a random 
// integer between 1 to 10, the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display a message "Good Work" 
// otherwise display a message "Not matched".
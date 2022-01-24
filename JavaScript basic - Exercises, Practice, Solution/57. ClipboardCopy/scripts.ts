// This code will not work in the enviroment that is not secured!-!-!-!
const btn = document.getElementById("btn")
const txt = document.getElementById("txtArea")

btn.addEventListener("click", () => {
    txt.select()
    txt.setSelectionRange(0,9999)
    navigator.clipboard.writeText(txt.value)
    console.log(txt.value)
})

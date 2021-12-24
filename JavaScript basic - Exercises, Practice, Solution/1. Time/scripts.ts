const day = document.getElementById("header_day")
const currentTime = document.getElementById("cur_time")

const d = new Date()
const weekday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let hour = d.getHours()
let minutes = d.getMinutes()
let seconds = d.getSeconds()

console.log(hour)
console.log(minutes)
console.log(seconds)

day.textContent = weekday[d.getDay()]

function displayCurrentTime(){
    currentTime.textContent = `${hour}:${minutes}:${seconds}`
}
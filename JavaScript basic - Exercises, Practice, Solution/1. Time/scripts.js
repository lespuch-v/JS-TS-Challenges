var day = document.getElementById("header_day");
var currentTime = document.getElementById("cur_time");

var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];




function displayCurrentTime() {
    var d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    day.textContent = weekday[d.getDay()];
  currentTime.textContent = ""
    .concat(hour, ":")
    .concat(minutes, ":")
    .concat(seconds);
}


setInterval(()=> {
    displayCurrentTime()

}, 1000)
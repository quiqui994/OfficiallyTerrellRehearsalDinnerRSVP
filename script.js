const target = new Date("July 30, 2026 17:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = target - now;

if(distance <= 0){

document.querySelector(".countdown").innerHTML =
"<h2>Today is the day!</h2>";

return;

}

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

const target = new Date("July 30, 2026 17:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = target - now;

if(distance <= 0){

document.getElementById("countdownText").textContent =
"Today is the day!";

return;

}

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdownText").textContent =
`${days} Days   ${hours} Hours   ${minutes} Minutes   ${seconds} Seconds`;
}

updateCountdown();

setInterval(updateCountdown,1000);

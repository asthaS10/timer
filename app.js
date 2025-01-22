const start=document.getElementById("start");
const reset=document.getElementById("reset");

function CountdownTimer() {
    const days = +(document.getElementById("day").value);
    const hours = +(document.getElementById("hr").value);
    const minutes = +(document.getElementById("min").value);
    const seconds = +(document.getElementById("sec").value);
    let countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + days);
    countdownDate.setHours(countdownDate.getHours() + hours);
    countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
    countdownDate.setSeconds(countdownDate.getSeconds() + seconds);
    console.log(countdownDate)
}
CountdownTimer();
// const input= document.getElementsByClassName("box")
// function StartTimer () {
//     const now = new Date().getTime();
//         const diff = (countdownDate - now)/1000;
//         input[4].value=Math.floor(diff/60/60/24);
//         input[5].value=Math.floor((diff/60/60)%24);
//         input[6].value=Math.floor((diff/60)%60);
//         input[7].value=Math.floor(diff%60);
// }
// StartTimer()
// setInterval(StartTimer,1000);





















const endDate = "27 July 2022 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[4].value = Math.floor(diff / 3600 / 24);
    inputs[5].value = Math.floor(diff / 3600) % 24;
    inputs[6].value = Math.floor(diff / 60) % 60;
    inputs[7].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)

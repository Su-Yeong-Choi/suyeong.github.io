const clockArea = document.querySelector("#clock-area");

function getClock() {
    const today = new Date();
    const hour = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");
    const h1 = clockArea.querySelector("h1");
    h1.innerText = `${hour}:${min}`;
}

getClock();
setInterval(getClock, 1000);
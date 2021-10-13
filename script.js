"use strict";


function getZero(time){
    return time < 10 ? '0' : '';
}

function currentTime() {
const currentTime = document.querySelector(".currentTime");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let session = 'AM';

    session = hours > 12 ? 'AM' : 'PM';

    
    let time = `${getZero(hours)}${hours}:${getZero(minutes)}${minutes}:${getZero(seconds)}${seconds} ${session}`
    currentTime.textContent = time;
}

setInterval(function(){ currentTime()}, 1000);

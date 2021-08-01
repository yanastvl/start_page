const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function formatTime(time) {
    return (time < 10 ? `0${time}` : time)
}

function getTime() {
    const today = new Date();
    clockTitle.innerHTML = today.toLocaleTimeString();

}



function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

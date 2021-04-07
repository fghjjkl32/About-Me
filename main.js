const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
    , "Friday", "SaturDay"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    // 24시간으로 되어있는 시간을 나머지 12 한다음 값을 가져온다 
    // 예시(현재 20시라고 한다면 8시로 변환)
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    // hours의 시간이 12보다 크다면 PM 그게 아니라면 AM 반환
    const timeMent = document.querySelector('.time_ment');

    hourEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</span>`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
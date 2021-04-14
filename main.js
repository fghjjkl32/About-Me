const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const timeMent = document.querySelector('.time_ment');
const videoEl = document.querySelector('.video')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
    , "Friday", "SaturDay"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];
const videos = ["video1", "video2", "video3", "video4", "video5", "video6"];

function setTime() {
    const time = new Date();
    // date 객체를 부른다
    const month = time.getMonth();
    const day = time.getDay();
    // 요일 >> 0~6 > 일요일~토요일
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    // 24시간으로 되어있는 시간을 나머지 12 한다음 값을 가져온다 
    // ex(현재 20시라고 한다면 8시로 변환)
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    // hours의 시간이 12보다 크다면 PM 그게 아니라면 AM 반환

    hourEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) 
    rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = "circle">${date}</span>`;
}

function setTimeMent() {
    const time = new Date();
    const hours = time.getHours();

    if ("0" <= hours && hours <= "5") {
        console.log("새벽");
        timeMent.innerHTML = '새벽';
        videoEl.innerHTML = `<video src="videos/${videos[0]}.mp4" autoplay muted loop></video>`;
    } else if ("6" <= hours && hours <= "10") {
        console.log("아침");
        timeMent.innerHTML = '아침';
        videoEl.innerHTML = `<video src="videos/${videos[1]}.mp4" autoplay muted loop></video>`;
    } else if ("11" <= hours && hours <= "13") {
        console.log("점심");
        timeMent.innerHTML = '점심';
        videoEl.innerHTML = `<video src="videos/${videos[2]}.mp4" autoplay muted loop></video>`;
    } else if ("14" <= hours && hours <= "16") {
        console.log("오후");
        timeMent.innerHTML = '오후';
        videoEl.innerHTML = `<video src="videos/${videos[3]}.mp4" autoplay muted loop></video>`;
    } else if ("17" <= hours && hours <= "20") {
        console.log("저녁");
        timeMent.innerHTML = '저녁';
        videoEl.innerHTML = `<video src="videos/${videos[4]}.mp4" autoplay muted loop></video>`;
    } else if ("21" <= hours && hours <= "24") {
        console.log("밤");
        timeMent.innerHTML = '밤';
        videoEl.innerHTML = `<video src="videos/${videos[5]}.mp4" autoplay muted loop></video>`;
    }
}

setTimeMent();

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);
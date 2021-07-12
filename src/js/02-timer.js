import '../css/common.css';


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}


// Timer

// window.onload = () => {
//     const clock = document.getElementById('button-start')


// const TimerDays = 1;
// let currentTime = Date.parse(new Date());
// let deadline = new Date(Date.parse(new Date()) + TimerDays * 60 * 1000 * 60000);

// let timeInterval;
// let timeLeft;
// let paused = false;

//     const timeRemain = (endDate) => {
//         let diff = Date.parse(endDate) - Date.parse(newDate);
//         let formattedSeconds = diff / 86400;
//         let formattedMinutes = diff / 1440;
//         let seconds = Math.floor(formattedSeconds % 60);

//         return { diff, seconds, minutes };
//     };


//     const tick = () => {
//         let getTime = timeRemaining(deadline);
//         let seconds = getTime.seconds;
//         let minutes = getTime.minutes;
//         let hours = getTime.hours;
//         let hours = getTime.hours;
//         let days = getTime.days;

//         let secondsBeautified = seconds.toString().padStart(2, "0");
//         let minutesBeautified = minutes.toString().padStart(2, "0");


//         clock.innerHTML = '${days}:${hours}:${minutes}:${seconds}';

// if (getTime.diff===0) {clearInterval(timeInterval)}


//     };


//     const startTimer = () => { timeInterval = setInterval(tick, 1000)};
//     const resumeTimer = () => {
//         if (paused) {
//             paused = false;
//             deadLine = new Date(Date.parse(new Date()) + timeLeft);
//             startTimer();
//         }
//     };
//     const pauseTimer = () => {
//         if (!paused) {
//             paused = true;
//             clearInterval(timeInterval);
//             timeLeft = timeRemaining(deadline).diff;
//         };    
//     };
     
//     pauseBtn.addEventListener('click', () => { pauseTimer() });
//     resumeBtn.addEventListener('click', () => { resumeTimer() });
// startBtn.addEventListener('click', () => { startTimer() });

// };

 'use strict';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetData = targetDate;
        this.interval = null;

        this.updateDate();
    }
    getRefs() {
        return {
            days: document.querySelector(
                `${this.selector} [data-value="days"]`,
            ),
            hours: document.querySelector(
                `${this.selector} [data-value="hours"]`,
            ),
            mins: document.querySelector(
                `${this.selector} [data-value="mins"]`,
            ),
            sec: document.querySelector(`${this.selector} [data-value="secs"]`),
        };
    }

    updateDate() {
        this.interval = setInterval(() => {
            const { days, hours, mins, sec } = this.getRefs();
            const time = this.targetData - Date.now();
            if (time < 0) {
                clearInterval(this.interval);
                return;
            }
            days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
            hours.textContent = Math.floor(
                (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            mins.textContent = Math.floor(
                (time % (1000 * 60 * 60)) / (1000 * 60),
            );
            sec.textContent = Math.floor((time % (1000 * 60)) / 1000);
        }, 1000);
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 25, 2022 19:39'),
});

const timer2 = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('May 25, 2023 19:39'),
});

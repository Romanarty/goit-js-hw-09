'use strict';

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let timerId = null;

startBtnRef.addEventListener('click', () => {
    startBtnRef.disabled = true;
    timerId = setInterval(() => {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
});

stopBtnRef.addEventListener('click', () => {
    startBtnRef.disabled = false;
    clearInterval(timerId);
});

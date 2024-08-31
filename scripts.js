let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10); // Update every 10ms for smoother milliseconds
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = "00:00:00.00"; // Reset to include milliseconds
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    isRunning = false;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

window.onload = () => {
    stopButton.disabled = true;
    resetButton.disabled = true;
};

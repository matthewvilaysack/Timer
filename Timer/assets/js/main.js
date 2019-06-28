let timer
let sec = 0
let min = 0
let hour = 0

let timerEl = document.querySelector('.timer')
let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let resetBtn = document.querySelector('#reset')

startBtn.addEventListener('click', () => {
    timer = setInterval(TimerHandler, 1000)
    resetBtn.disabled = true
})


stopBtn.addEventListener('click', () => {
    timer = clearInterval(timer)
    resetBtn.disabled = false
})


resetBtn.addEventListener('click', () => {
    timer = clearInterval(timer)
    resetBtn.disabled = true
    sec = 0
    min = 0
    hour = 0
    timerEl.innerHTML = '00:00:00'
})


function TimerHandler() {
    sec++

    if (sec === 60) {
        sec = 0
        min++
    }

    if (min === 60) {
        min = 0
        hour++
    }
    displayTime()
}


function displayTime() {
    let fixedSec = sec 
    let fixedMins = min
    let fixedHours = hour
    
    if (sec < 10) {
        fixedSec = '0' + sec
    }
    if (min < 10) {
        fixedMins = '0' + min
    }
    if (hour < 10) {
        fixedHours = '0' + hour
    }
    timerEl.innerHTML = fixedHours + ":" + fixedMins +  ":" + fixedSec


}
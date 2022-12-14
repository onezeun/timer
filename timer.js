$(document).ready(function () {
  var timer = $('.timer');
  var startBtn = $('.start_btn');
  var stopBtn = $('.stop_btn');
  var resetBtn = $('.reset_btn');

  let TIME = 0;
  let cron;
  let check = 0;

  const startButton = () => {
    if(check == 0) {
      updateTimer();
      stopButton();
      cron = setInterval(updateTimer, 1000);
      check = 1;
    } else return false;
  }

  const stopButton = () => {
    clearInterval(cron);
    check = 0;
  }

  const resetButton = () => {
    timer.text('00 : 00 : 00');
    stopButton();
    check = 0;
    return (TIME = 0);
  }

  const updateTimer = () => {
    const hours = Math.floor(TIME / 3600);
    const checkMinutes = Math.floor(TIME/60);
    const seconds = TIME % 60;
    const minutes = checkMinutes % 60;

    timer.text(`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`)
    TIME++
    console.log(TIME-1)
  }

  const init = () => {
    startBtn.on('click', startButton);
    stopBtn.on('click', stopButton);
    resetBtn.on('click', resetButton);
  }

  init();
})
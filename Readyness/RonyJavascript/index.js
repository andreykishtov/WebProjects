let clock = {};
let getId = value => document.getElementById(value);
clock.sound = new Audio('http://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav');

clock.startTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  minute = clock.checkTime(minute);
  second = clock.checkTime(second);
  document.getElementById('currentTime').innerHTML = `${hour}:${minute}:${second}`;
  setTimeout(clock.startTime, 500);
};

clock.checkTime = i => {
  return i < 10 ? '0' + i : i;
};

clock.alarmSet = () => {
  clearTimeout(clock.alarm);
  let currentTime = new Date();
  let input = getId('time');
  let timeDIv = getId('alarm');
  timeDIv.innerHTML = input.value;

  let inputArr = input.value.split(':');
  let alarmTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    ...inputArr
  );

  let alarmTimer = alarmTime.getTime() - currentTime.getTime();
  setTimeout(() => {
    clock.sound.play();
  }, alarmTimer);
};

clock.alarm = () => {
  clock.sound.play();
};

clock.offAlarm = () => {
  clock.sound.pause();
};

clock.snooze = () => {
  clock.sound.pause();
  setTimeout(() => {
    clock.sound.play();
  }, 3000);
};

window.onload = () => {
  clock.startTime();
};

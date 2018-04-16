var today = new Date();
var currentDate = today.toDateString();

var el = document.getElementById('date-text');
el.innerHTML = currentDate;

var updateLoop = setInterval(timeMain, 1000);

timeMain();

function timeMain() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentSecond = currentTime.getSeconds();

  var timeStamp = currentHour + ':' + currentMinute + ':' + currentSecond;

  var realTime = document.getElementById('time-text');
  realTime.innerHTML = timeStamp;

  if (timeStamp == '9:00:0' || '10:00:0' || '11:00:0') {
    alert("Time to exercise!")
  }
}

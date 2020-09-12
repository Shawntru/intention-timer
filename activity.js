class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.timePassed = 0;
    this.completed = false;
  }

  // countdown(startTime) {
  //   var startTime = (parseInt(currentActivity.minutes) * 60) + parseInt(currentActivity.seconds);
  //   var timeLeft = startTime;
  //   setInterval(function() {
  //     this.timePassed += 1;
  //     timeLeft = (startTime - this.timePassed);
  //     formatTimer(timeLeft);
  //   }, 1000);
  // }
  //
  // formatTimer(time) {
  //   var minutes = Math.floor(time / 60);
  //   var seconds = time % 60;
  //   if (minutes < 10) {
  //     minutes = `0${minutes}`;
  //   }
  //   if (seconds < 10) {
  //     seconds = `0${seconds}`;
  //   }
  //   timer.innerHTML = `${minutes}:${seconds}`;
  // }

  markComplete() {

  }

  saveToStorage() {

  }
}

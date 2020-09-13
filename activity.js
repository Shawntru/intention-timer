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

  startTimer() {
    var timeLeft;
    var startTime = (parseInt(currentActivity.minutes) * 60) + parseInt(currentActivity.seconds);
    var interval = setInterval(function() {
      if (timeLeft === 0) {
        clearInterval(interval);
        return alert('Time\'s Up!');
      }
      currentActivity.timePassed += 1;
      timeLeft = (startTime - currentActivity.timePassed);
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      if (minutes < 10) minutes = `0${minutes}`;
      if (seconds < 10) seconds = `0${seconds}`;
      timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
  }

  markComplete() {

  }

  saveToStorage() {

  }
}

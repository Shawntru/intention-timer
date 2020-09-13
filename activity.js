class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.startTime = (this.minutes * 60) + this.seconds;
    this.timePassed = 0;
    this.completed = false;
  }

  startTimer() {
    var timeLeft;
    var interval = setInterval(function() {
      if (timeLeft === 0) {
        clearInterval(interval);
        return alert('Time\'s Up!');
      }
      currentActivity.timePassed += 1;
      timeLeft = (currentActivity.startTime - currentActivity.timePassed);
      formatTimer(timeLeft);
    }, 1000);
  }

  markComplete() {

  }

  saveToStorage() {

  }
}

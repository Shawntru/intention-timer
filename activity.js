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
  //   var timeLeft = startTime;
  //   setInterval(function() {
  //     this.timePassed += 1;
  //     timeLeft = (startTime - this.timePassed);
  //     formatTimer(timeLeft);
  //   }, 1000);
  // }

  markComplete() {

  }

  saveToStorage() {

  }
}

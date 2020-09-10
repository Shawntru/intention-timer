var activities = [];
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');
var userTimerSection = document.querySelector('.user-timer');

userTimerSection.addEventListener('keyup', checkNumber);

function startActivity() {
  var checkedButton = document.querySelector('input[name="selectors"]:checked').value;
  createActivity(checkedButton);
}

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
    startActivityButton.removeAttribute('disabled');
  }
}

function createActivity(category) {
  var newActivity = new Activity(
    category,
    descriptionInput.value,
    minuteInput.value,
    secondInput.value
  );
  activities.push(newActivity);
}

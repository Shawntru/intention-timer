var currentActivity;
var pastActivities = [];
var startActivityButton = document.querySelector('.start-activity-button');
var startTimerButton = document.querySelector('.start-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');

document.querySelector('.user-time').addEventListener('keyup', checkNumber);
startTimerButton.addEventListener('click', function() {
  currentActivity.startTimer();
});

function startActivity() {
  var checkedButton = document.querySelector('input[name="selectors"]:checked').value;
  errorHandling();
  startTimerButton.classList.add(`${checkedButton}-ring`);
  createActivity(checkedButton);
  formTimerInput();
}

function formTimerInput() {
  document.querySelector('.user-description-timer').innerText = currentActivity.description;
  var minutes = currentActivity.minutes;
  var seconds = currentActivity.seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.querySelector('.timer').innerText = minutes + ":" + seconds;
}

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
    startActivityButton.removeAttribute('disabled');
  } else {
    startActivityButton.setAttribute('disabled', true);
  }
}

function highlightIcon(button) {
  clearHighlight();
  document.getElementById(`${button}-icon`).src = `./assets/${button}-active.svg`;
}

function clearHighlight() {
  var buttonClasses = ['study', 'meditate', 'exercise'];
  for (var i = 0; i < buttonClasses.length; i++) {
    document.getElementById(`${buttonClasses[i]}-icon`).src = `./assets/${buttonClasses[i]}.svg`;
  }
}

function errorHandling() {
  if (descriptionInput.value === '') {
    document.querySelector('.error-message').classList.toggle('hidden');
    descriptionInput.classList.add('input-error');
  } else {
    toggleDisplay();
  }
}

function createActivity(category) {
  currentActivity = new Activity(
    category,
    descriptionInput.value,
    minuteInput.value,
    secondInput.value
  );
  pastActivities.push(currentActivity);
  // Need to move later to timer complete function
}

function toggleDisplay() {
  document.querySelector('.form-display').classList.toggle('hidden');
  document.querySelector('.timer-display').classList.toggle('hidden');
}

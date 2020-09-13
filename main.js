var currentActivity;
var pastActivities = [];
var startActivityButton = document.querySelector('.start-activity-button');
var startTimerButton = document.querySelector('.start-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');
var timer = document.querySelector('.timer');
var activityTitle = document.getElementById('activity-title');
var formDisplay = document.querySelector('.form-display');
var timerDisplay = document.querySelector('.timer-display');
var logActivityButton = document.querySelector('.log-activity-button');
var createNewActivityButton = document.querySelector('.create-new-activity-button');

document.querySelector('.user-time').addEventListener('keyup', checkNumber);
startTimerButton.addEventListener('click', function() {
  currentActivity.startTimer();
});
logActivityButton.addEventListener('click', logActivity);
createNewActivityButton.addEventListener('click', showForm);

function startActivity() {
  var checkedButton = document.querySelector('input[name="selectors"]:checked').value;
  if (errorHandling() === true) return;
  startTimerButton.classList.add(`${checkedButton}-ring`);
  createActivity(checkedButton);
  formatTimer(currentActivity.startTime);
  showTimer();
  document.getElementById(`${checkedButton}-button`).checked = false;
}

function formatTimer(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  timer.innerHTML = `${minutes}:${seconds}`;
}

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
    startActivityButton.removeAttribute('disabled');
  } else startActivityButton.setAttribute('disabled', true);
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
    document.querySelector('.error-message').classList.remove('hidden');
    descriptionInput.classList.add('input-error');
    return true;
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

function completeActivity() {
  startTimerButton.innerText = 'COMPLETE!';
  startTimerButton.setAttribute('disabled', true);
  logActivityButton.classList.remove('hidden');
}

function showTimer() {
  formDisplay.classList.add('hidden');
  timerDisplay.classList.remove('hidden');
  document.querySelector('.user-description-timer').innerText = currentActivity.description;
  activityTitle.innerText = 'Current Activity';
}

function logActivity() {
  logActivityButton.classList.add('hidden');
  createNewActivityButton.classList.remove('hidden');
}

function showForm() {
  clearForm();
  formDisplay.classList.remove('hidden');
  timerDisplay.classList.add('hidden');
  activityTitle.innerText = 'New Activity';
}

function clearForm() {
  descriptionInput.value = '';
  minuteInput.value = '';
  secondInput.value = '';
  clearHighlight();
}

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
var activityCards = document.querySelector('.activity-cards');
var blankLog = document.querySelector('.blank-log');
var timerView = document.querySelector('.timer-view');
var pastClearBtn = document.getElementById('past-activity-btn');

window.onload = displayStorage;
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
  toggleHidden(timerView);
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
    toggleHidden(document.querySelector('.error-message'));
    descriptionInput.classList.add('input-error');
    return true;
  }
}

function clearPast() {
  activityCards.innerHTML = '';
  toggleHidden(blankLog, pastClearBtn);
  localStorage.clear();
}

function createActivity(category) {
  currentActivity = new Activity(
    category,
    descriptionInput.value,
    minuteInput.value,
    secondInput.value
  );
}

function completeActivity() {
  currentActivity.markComplete();
  startTimerButton.innerText = 'COMPLETE!';
  toggleHidden(logActivityButton);
}

function showTimer() {
  toggleHidden(formDisplay, timerDisplay);
  document.querySelector('.user-description-timer').innerText = currentActivity.description;
  activityTitle.innerText = 'Current Activity';
}

function logActivity() {
  activityTitle.innerText = 'Completed Activity';
  toggleHidden(timerView, logActivityButton, createNewActivityButton);
  blankLog.classList.add('hidden');
  pastClearBtn.classList.remove('hidden');
  createCard(currentActivity);
  pastActivities.push(currentActivity);
  currentActivity.saveToStorage();
}

function createCard(activity) {
  var categoryCapital = activity.category.charAt(0).toUpperCase() + activity.category.slice(1);
  var activityCard = `
  <div class="activity-card">
    <div class="${activity.category}-ring activity-line"></div>
    <div>
      <p id="category-title">${categoryCapital}</p>
      <p>${activity.minutes} MIN ${activity.seconds} SECONDS</p>
      <p>${activity.description}</p>
    </div>
  </div>
  `;
  activityCards.insertAdjacentHTML('afterbegin', activityCard);
}

function displayStorage() {
  if (localStorage.length > 0) {
    toggleHidden(blankLog, pastClearBtn);
  }
  for (var i = 0; i < localStorage.length; i++) {
    var retrievedActivity = localStorage.getItem(localStorage.key(i));
    var parsedActivity = JSON.parse(retrievedActivity);
    createCard(parsedActivity);
  }
}

function showForm() {
  clearForm();
  toggleHidden(formDisplay, timerDisplay);
  activityTitle.innerText = 'New Activity';
}

function clearForm() {
  descriptionInput.value = '';
  minuteInput.value = '';
  secondInput.value = '';
  clearHighlight();
  startTimerButton.innerText = 'START';
  startTimerButton.removeAttribute('disabled');
  toggleHidden(createNewActivityButton);
}

function toggleHidden() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].classList.toggle('hidden');
  }
}

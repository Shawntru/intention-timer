var activities = [];
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');
var userTimerSection = document.querySelector('.user-timer');
var selectButtons = document.querySelector('.category-buttons');

userTimerSection.addEventListener('keyup', checkNumber);
// selectButtons.addEventListener('click', highlightIcon);

function startActivity() {
  var checkedButton = document.querySelector('input[name="selectors"]:checked').value;
  checkDescription();
  createActivity(checkedButton);
}

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
    startActivityButton.removeAttribute('disabled');
  }
}

function highlightIcon() {
  var checkedButton = document.querySelector('input[name="selectors"]:checked').value;
  if (checkedButton === 'study') {
    document.getElementById('study-icon').src = "./assets/study-active.svg";
  } else if (checkedButton === 'meditate') {
      document.getElementById('meditate-icon').src = "./assets/meditate-active.svg";
  } else if (checkedButton === 'exercise') {
      document.getElementById('exercise-icon').src = "./assets/exercise-active.svg";
  }
}

function checkDescription() {
  if (descriptionInput.value === '') {
    document.querySelector('.error-message').classList.toggle('hidden');
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

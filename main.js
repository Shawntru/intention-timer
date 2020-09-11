var activities = [];
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');
var userTimeSection = document.querySelector('.user-time');
var selectButtons = document.querySelector('.category-buttons');

userTimeSection.addEventListener('keyup', checkNumber);

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

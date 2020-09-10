var selectedCategory;
var activities = [];

var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');

startActivityButton.addEventListener('click', startActivity);
minuteInput.addEventListener('keyup', checkNumber);
secondInput.addEventListener('keyup', checkNumber);

studyButton.onclick = function() {
  updateCategory(studyButton);
}

meditateButton.onclick = function() {
  updateCategory(meditateButton);
}

exerciseButton.onclick = function() {
  updateCategory(exerciseButton);
}

function updateCategory(button) {
  selectedCategory = button.value;
  highlightSelected();
  console.log(selectedCategory);
}

function highlightSelected() {
  if (selectedCategory === 'study') {
    studyButton.classList.add('study-highlighted');
    document.getElementById('study-icon').src = "./assets/study-active.svg"
    meditateButton.classList.remove('meditate-highlighted');
    exerciseButton.classList.remove('exercise-highlighted');
  }
  if (selectedCategory === 'meditate') {
    meditateButton.classList.add('meditate-highlighted');
    document.getElementById('meditate-icon').src = "./assets/meditate-active.svg"
    studyButton.classList.remove('study-highlighted');
    exerciseButton.classList.remove('exercise-highlighted');
  }
  if (selectedCategory === 'exercise') {
    exerciseButton.classList.add('exercise-highlighted');
    document.getElementById('exercise-icon').src = "./assets/exercise-active.svg"
    studyButton.classList.remove('study-highlighted');
    meditateButton.classList.remove('meditate-highlighted');
  }
}

function highlightIcon() {

}

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
    startActivityButton.removeAttribute('disabled');
  }
}

function startActivity(category) {
  var newActivity = new Activity(
    selectedCategory,
    descriptionInput.value,
    minuteInput.value,
    secondInput.value
  );
  activities.push(newActivity);
  console.log(newActivity);
  console.log(activities)
}

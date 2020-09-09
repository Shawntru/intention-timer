var activities = [];

var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionInput = document.querySelector('.description-input');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');

// var categoryButton = document.querySelectorAll('.category-button')

startActivityButton.addEventListener('click', startActivity);

studyButton.addEventListener('click', function () {
  studyButton.classList.toggle('study-highlighted');
});

meditateButton.addEventListener('click', function () {
  meditateButton.classList.toggle('meditate-highlighted');
});

exerciseButton.addEventListener('click', function () {
  exerciseButton.classList.toggle('exercise-highlighted');
});

minuteInput.addEventListener('keyup', checkNumber);
secondInput.addEventListener('keyup', checkNumber);

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
    startActivityButton.removeAttribute('disabled');
  }
}

function startActivity() {
  var newActivity = new Activity(
    'category',
    descriptionInput.value,
    minuteInput.value,
    secondInput.value
  );
  activities.push(newActivity);
}



// for (var i = 0; i < categoryButton.length; i++) {
//   categoryButton[i].addEventListener('click', function() {
//     categoryButton.classList.add('highlighted')
//   })
// }

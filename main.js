var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startActivityButton = document.querySelector('.start-activity-button');
var minuteInput = document.querySelector('.minutes');
var secondInput = document.querySelector('.seconds');



// var categoryButton = document.querySelectorAll('.category-button')

startActivityButton.addEventListener('click', checkNumber);

studyButton.addEventListener('click', function () {
  studyButton.classList.toggle('study-highlighted');
});

meditateButton.addEventListener('click', function () {
  meditateButton.classList.toggle('meditate-highlighted');
});

exerciseButton.addEventListener('click', function () {
  exerciseButton.classList.toggle('exercise-highlighted');
});

function checkNumber() {
  var minutes = parseInt(minuteInput.value);
  var seconds = parseInt(secondInput.value);
  if (isNaN(minutes) || isNaN(seconds)) {
    console.log('NOOOOOOOO');
  }
}



// for (var i = 0; i < categoryButton.length; i++) {
//   categoryButton[i].addEventListener('click', function() {
//     categoryButton.classList.add('highlighted')
//   })
// }

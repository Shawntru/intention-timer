var studyButton = document.querySelector('.study-button')
var meditateButton = document.querySelector('.meditate-button')
var exerciseButton = document.querySelector('.exercise-button')

// var categoryButton = document.querySelectorAll('.category-button')

studyButton.addEventListener('click', function () {
  studyButton.classList.toggle('highlighted');
});

meditateButton.addEventListener('click', function () {
  meditateButton.classList.toggle('highlighted');
});

exerciseButton.addEventListener('click', function () {
  exerciseButton.classList.toggle('highlighted');
});



// for (var i = 0; i < categoryButton.length; i++) {
//   categoryButton[i].addEventListener('click', function() {
//     categoryButton.classList.add('highlighted')
//   })
// }

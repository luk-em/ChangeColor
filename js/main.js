var firstDiv = document.querySelector('.s1');
var secondDiv = document.querySelector('.s2');

function changeColor() {
    firstDiv.classList.toggle('red');
    secondDiv.classList.toggle('red');
}

firstDiv.addEventListener('click', changeColor);
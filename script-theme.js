const buttonTheme = document.querySelector('.button-theme');
const calculator = document.querySelector('.calculator');
const buttonFunction = document.querySelector('.button.function');

function change () {

  if (calculator.style.background === '' || calculator.style.background === 'yellow') {
    calculator.style.background = 'gray'
    buttonFunction.style.background = 'violet';
  }
  else {
    calculator.style.background = 'yellow'
    buttonFunction.style.background = '#a5a5a5';
  }
}

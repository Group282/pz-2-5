const buttonTheme = document.querySelector('.button-theme');
const calculator = document.querySelector('.calculator');
const buttonFunction = document.querySelector('.button.function');

function change(){
  console.log(calculator.style.background)

  if(calculator.style.background === ''|| calculator.style.background==='black'){
    calculator.style.background = 'red'
    buttonFunction.style.background = 'green';
  }
  else {
    calculator.style.background = 'black'
    buttonFunction.style.background = '#a5a5a5';
  }
}

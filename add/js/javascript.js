/*
this code was clone with site: https://www.mil.gov.ua/
The site is protected by the Ministry of Defense and the Magic Corps of the Armed Forces of Ukraine
 */
const btn = document.getElementById('theme-btn');
const link = document.getElementById('theme-link');
const copyBtn = document.getElementById('memory-btn');
const pasteBtn = document.getElementById('paste-btn');
const clearBtn = document.getElementById('clear-btn');
const minusBtn = document.getElementById('minus-btn');
let value;

function calcNumbers(result){
  form.displayResult.value=form.displayResult.value+result;
}

btn.addEventListener('click', () => {
  let darkTheme = './css/style.css';
  let lightTheme = './css/light-theme.css';
  let currentTheme = link.getAttribute('href');

  if (currentTheme == darkTheme) {
    currentTheme = lightTheme;
  } else {
    currentTheme = darkTheme;
  }

  link.setAttribute('href', currentTheme);
});

copyBtn.addEventListener('click', () =>{
  value = form.displayResult.value;
});

pasteBtn.addEventListener('click', () =>{
  form.displayResult.value += value;
});

clearBtn.addEventListener('click', () => {
  form.displayResult.value = '';
});

minusBtn.addEventListener('click', () => {
  form.displayResult.value = -form.displayResult.value;
});
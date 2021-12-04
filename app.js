const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn0 = document.getElementById('0');
const btnAC = document.getElementById('AC');
const btnPlas = document.getElementById('plus');
const btnMinus = document.getElementById('-');
const btnDiv = document.getElementById('*');
const btnMul = document.getElementById('/');
const btnDot = document.getElementById('.');
const btnDor = document.getElementById('=');
const btnProc = document.getElementById('%');
// const _hz = document.getElementById('hz');
const btnZM = document.getElementById('ZM');
const display = document.getElementById('display');

btn1.onclick=()=>{
    display.innerText+='1'
}
btn2.onclick=()=>{
    display.innerText +='2'
}
btn3.onclick=()=>{
    display.innerText +='3'
}
btn4.onclick=()=>{
    display.innerText +='4'
}
btn5.onclick=()=>{
    display.innerText +='5'
}
btn6.onclick=()=>{
    display.innerText +='6'
}
btn7.onclick=()=>{
    display.innerText +='7'
}
btn8.onclick=()=>{
    display.innerText +='8'
}
btn9.onclick=()=>{
    display.innerText +='9'
}
btn0.onclick=()=>{
    display.innerText+='0'
}
btnPlas.onclick=()=>{
    if (hasOperation()) return;
    display.innerText+='+'
    if(display.innerText.startsWith('+'))
{
    display.innerText = ''
}
}
btnMinus.onclick=()=>{
    if (hasOperation()) return;
    display.innerText +='-'
}
btnDiv.onclick=()=>{
    if (hasOperation()) return;

    display.innerText +='*'
    if(display.innerText.startsWith('*'))
{
    display.innerText = ''
}
}
btnMul.onclick=()=>{
    if (hasOperation()) return;

    display.innerText +='/'
    if(display.innerText.startsWith('/'))
{
    display.innerText = ''
}
}
btnAC.onclick=()=>{
    display.innerText =''
};
btnProc.onclick=()=>{
    if (hasOperation()) return;
    display.innerText +='%'
    if(display.innerText.startsWith('%'))
{
    display.innerText = ''
}
};
btnDot.onclick=()=>{
    if (hasOperation()) return;

    display.innerText +='.'
    if(display.innerText.startsWith('.'))
{
    display.innerText = ''
}
};
btnDor.onclick=()=>{
    let isStrContainPlus = display.innerText.indexOf('+') > 0;
    let isStrContainMinus = !display.innerText.startsWith('-') && display.innerText.indexOf('-') > 0 ||
    display.innerText.startsWith('-')  === 0 && display.innerText.includes('-', 1);
    let isStrContainMultiply = display.innerText.indexOf('*') > 0;
    let isStrContainDivision = display.innerText.indexOf('/') > 0;
    
    if (isStrContainPlus) operation(display.innerText, '+')
    if (isStrContainMinus) operation(display.innerText, '-')
    if (isStrContainMultiply) operation(display.innerText, '*')
    if (isStrContainDivision) operation(display.innerText, '/')
};
btnZM.onclick=()=>{
    document.body.classList.toggle('backStyle');
}
function operation(foo,operator)
{
   let text = foo.split(operator);
   let num1 = parseInt(text[0]);
   let num2 = parseInt(text[1]);
   switch (operator)
   {
    case '+':
        display.innerText = num1+num2;
        break;
    case '-':
        display.innerText = num1-num2;
        break;
    case '*':
        display.innerText = num1*num2;
        break;
    case '/':
        display.innerText = num1/num2;
        break;
        default: display.innerText = 0;
   }
};

function hasOperation(){
    return display.innerText.includes('+') ||
    !display.innerText.startsWith('-') && display.innerText.indexOf('-') > 0 ||
    display.innerText.startsWith('-')  === 0 && display.innerText.includes('-', 1) ||
    display.innerText.includes('*') ||
    display.innerText.includes('/') ||
    display.innerText.includes('%');
}
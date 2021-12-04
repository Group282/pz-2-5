const numbers=['0','1','2','3','4','5','6','7','8','9','.'];
const commands=['+','-','X','/','%'];
let numberOne='';
let numberTwo='';
let flag = false;
let command= '';
const result=document.querySelector('.calcalculate-screen p');

function clear(){
    numberOne='';
    numberTwo='';
    command= '';
    flag=false;
    result.textContent=0;
}
document.querySelector('.ac').onclick = () => clear();
document.querySelector('.buttons').onclick=(event)=>{
    if(!event.target.classList.contains('btn'))return;
    if(event.target.classList.contains('ac'))return;
    result.textContent='';
    const key =event.target.textContent;
    if(numbers.includes(key)){
        if(numberTwo===""&& command===''){
            numberOne +=key;
            result.textContent=numberOne;
        }
        else if(numberOne!= '' && numberTwo !=='' && flag ){
            numberTwo+=key;
            flag= false;
            result.textContent= numberTwo;
        }
        else{
            numberTwo+=key;
            flag=false;
            result.textContent=numberTwo;
        }
        // console.log(numberOne,numberTwo,command);
    }
     if(commands.includes(key)){
         command=key;
         result.textContent=command;
         result;
     }

     if(key=== '='){
        if (numberTwo==='') numberTwo = numberOne;
       switch (command){
         case "+":
            numberOne = (+numberOne)+(+numberOne);
           break;
         case "-":
            numberOne -= numberTwo;
           break;
         case "X":
            numberOne *= numberTwo;
           break;
         case "/":
           if (numberTwo === '0') {
             result.textContent = 'You have a mistakes'
             numberOne='';
             numberTwo='';
             command='';
             return;
           }
           numberOne /= numberTwo;
           break;
         case "%":
            numberOne = numberTwo/a * 100;
           break;   
                 }
            flag=true;
            numberTwo='';
            result.textContent=numberOne;
            
            }
    }

   
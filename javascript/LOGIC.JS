const defaultResult =0;
let currentResult=defaultResult;


function getUserInput() 
{
 return parseFloat(userInput.value);
}
function descripition( operator,intialValue , calcNumber){
    const calcDescrpition = `  ${intialValue} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescrpition);
}

function add(){
     const   enteredInput = getUserInput();
     const intialResult = currentResult;
    
     currentResult  +=   enteredInput
     descripition('+',intialResult,enteredInput)}
    

function sub(){
    const   enteredInput = getUserInput();
     const intialResult = currentResult;
     currentResult -= enteredInput
     descripition('-',intialResult,enteredInput)}


function multi(){
    const   enteredInput = getUserInput();
    const intialResult = currentResult;
    currentResult *=  enteredInput
    descripition('*',intialResult,enteredInput)
}
function square(){
    const   enteredInput = getUserInput();
    const intialResult = currentResult;
    currentResult = enteredInput ** 2;
    descripition('^',enteredInput,2)}
    function divide(){
        const   enteredInput = getUserInput();
        const intialResult = currentResult;
        currentResult /=  enteredInput;
        descripition('/',intialResult ,enteredInput)}
    


    

function clear(){
    currentResult=currentResult * 0
    outputResult(0,"cleared")
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',multi);
clearBtn.addEventListener('click',clear)
squareBtn.addEventListener('click',square)
divideBtn.addEventListener('click',divide)
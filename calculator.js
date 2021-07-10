// console.log(operate('DIV', 3,2));
let input = '';
let operand1=null;
let operand2=null;
// console.log('works');

function add(x, y) {
  return  x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function operate(operator, operand1, operand2) {
  let result = 0;
  switch (operator) {
    case 'ADD':
      result = add(operand1, operand2);
      break;
    case 'SUB':
      result = sub(operand1, operand2);
      break;
    case 'MUL':
      result = mul(operand1, operand2);
      break;
    case 'DIV':
      result = div(operand1, operand2);
      break;
  }
  return result;
}


const digitButtons = document.querySelectorAll('button.digit');
const operationButtons = document.querySelectorAll('.operation');
const calculatorDisplay = document.querySelector('.calculator-display');

clearInput();
clearDisplay();

// console.log(digitButtons);
// console.log(operationButtons);
digitButtons.forEach(btn=>addEventListener('click', pushDigit));
operationButtons.forEach(brn=>addEventListener('click', pushOperation));

function clearDisplay() {
  calculatorDisplay.value='';
}
function clearInput() {
  input = '';
}
function updateDisplay(input) {
  calculatorDisplay.value=input;
}
// clearDisplay();

function pushDigit(e) {
  if(e.target.className === 'digit') {
    input += e.target.dataset.value;
    console.log(input);
    updateDisplay(input);
  }
  // console.log(e.target.dataset.value);
}

function pushOperation(e) {
  if(e.target.classList.contains('operation')) {
    // console.log('its an op');
    if(e.target.dataset.op==='CLR')  {
      clearDisplay();
      clearInput();
      operand1 = null;
      operand2 = null;
      return;
    }
    if(e.target.dataset.op==='EQ')  {
      //call calculate
      clearInput();
      clearDisplay();
      // calculate(e.target.dataset.op);
      if(operand1!=null && operand2!=null) {
        clearInput();
        clearDisplay();
        calculate(e.target.dataset.op);
        return
      }
      console.log('=');

      return;
    }
    if( operand1===null) {
      operand1 = parseInt(input);
      clearInput();
      clearDisplay();
      console.log('op1',operand1);
      return;
    }
    if(operand2===null) {
      operand2 = parseInt(input);
      clearInput();
      clearDisplay();
      console.log('op2', operand2);
      return;
    }


  }
  // get input
  //store in op1

}
function calculate(op) {
  let output = operate(op, operand1, operand2);
  updateDisplay(output);
}

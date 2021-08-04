// console.log(operate('DIV', 3,2));
let input = '';
let operands = [];
let operators = [];
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
  console.log("inside operate: ", operand1, operand2, operator);
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
// const inputDisplay = document
clearInput();
clearDisplay();

// console.log(digitButtons);
// console.log(operationButtons);
digitButtons.forEach(btn=>addEventListener('click', pushDigit));
operationButtons.forEach(btn=>addEventListener('click', pushOperation));

function clearDisplay() {
  calculatorDisplay.value = '';
}

function clearInput() {
  input = '';
}

function updateDisplay(input) {
  calculatorDisplay.value = input;
}

function resetOperands() {
  operands = [];
}

function resetOperators() {
    operators = [];
}

// clearDisplay();

function pushDigit(e) {
  if(e.target.className === 'digit') {
    input += e.target.dataset.value;
    console.log('pushDigit: ',input);
    updateDisplay(input);
  }
  // console.log(e.target.dataset.value);
}

function pushOperation(e) {
  if(e.target.classList.contains('operation')) {
    // console.log('its an op');
    if(e.target.dataset.op === 'CLR')  {
      clearInput();
      clearDisplay();
      resetOperands();
      resetOperators();
      return;
    }
    if(e.target.dataset.op === 'SUB')  {
        operands.push(input);
        operators.push('SUB');
        clearInput();
      return;
    }
    if(e.target.dataset.op === 'MUL')  {
        operands.push(input);
        operators.push('MUL');
        clearInput();
      return;
    }
    if(e.target.dataset.op === 'DIV')  {
        operands.push(input);
        operators.push('DIV');
        clearInput();
      return;
    }
    if(e.target.dataset.op === 'ADD')  {
        operands.push(input);
        operators.push('ADD');
        console.log('inside ADD ', operands[0], operands[1]);
        clearInput();
      return;
    }
    if(e.target.dataset.op === 'EQ')  {
        operands.push(input);
        // while operators
        // deque 2 operands ad apply operation(front)
        // deque operation
        // enque result
        // calculate(operation);
        while(operators.length != 0) {
          // console.log('looping');
          // grab two elements
          let op1 = operands.shift();
          let op2 = operands.shift();
          // operate
          if(operators[0] === 'DIV' && op2 == 0) {
            updateDisplay("ERR, cannot DIV by 0");
            break;
          }
          let tmp = calculate( operators[0], op1 ,op2);
          console.log("tmp operation: ", tmp);
          // save it on the front
          operands.unshift(tmp);
          // eliminate operation
          operators.shift();
        }
        resetOperands();
        resetOperators();
      return;
    }


  }
  // get input
  //store in op1
return;
}

function calculate(op, op1, op2) {
  let output = operate(op, parseFloat(op1), parseFloat(op2));
  console.log('ouptup: ', output);
  updateDisplay(output);
  // resetOperands();
  // resetOperation();
  // operands[0] = output;
  // operands[1] = 0;
  console.log("operands: ",operands[0], operands[1]);
  return output;
}

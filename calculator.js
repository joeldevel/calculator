console.log('works');

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

console.log(operate('DIV', 3,2));

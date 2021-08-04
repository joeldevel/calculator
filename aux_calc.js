/*
operations = [1,2,1,2];

operators = ['+', '+', '+'];

while(operators.length != 0) {
  // console.log('looping');
  // grab two elements
  let op1 = operations.shift();
  let op2 = operations.shift();
  // operate
  let tmp = op1 + op2;
  console.log("tmp operation: ", tmp);
  // save it on the front
  operations.unshift(tmp);
  // eliminate operation
  operators.pop();
}

console.log(operations);
*/

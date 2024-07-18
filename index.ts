#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first no :", type: "number", name: "firstNumber" },
  { message: "Enter second no :", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action :",
    type: "list",
    name: "operator",
    choices: ['addition', 'subtraction', 'multiplication', 'division', 'modulus']
  }
]);

if(answer.operator === 'addition'){
  console.log('your answer is :', answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'subtraction') {
  console.log('your answer is :', answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'multiplication') {
  console.log('your answer is :', answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'division') {
  console.log('your answer is :', answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === 'modulus') {
  console.log('your answer is :', answer.firstNumber % answer.secondNumber);
}
else{
  console.log('Enter valid value');
}
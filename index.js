#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first no", type: "number", name: "firstNumber" },
    { message: "enter second no", type: "number", name: "secondName" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ['add', 'sub', 'mul', 'divi']
    }
]);
if (answer.operator === 'add') {
    console.log('your value is ', answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'sub') {
    console.log('your value is', answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'mul') {
    console.log('your value is', answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'divi') {
    console.log('your value is', answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Enter valid value');
}

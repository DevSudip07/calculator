// let num1 = document.querySelector('#input1');
// let operator = document.querySelector('#input2');
// let ac = document.querySelector('#all-clear');
// let num3 = document.querySelector('#input3');
// let modulus = document.querySelector('#modulus');
// let divide = document.querySelector('#divide');
// let multiply = document.querySelector('#multiply');
// let subtract = document.querySelector('#subtract');
// let plus = document.querySelector('#plus');
// let equal = document.querySelector('#equal');
// let ans = document.querySelector('#ans');
// let btn = document.querySelector('table td button');


// script.js

let input1 = '';
let input2 = '';
let operator = '';
let resultDisplayed = false;

const inputField1 = document.getElementById('input1');
const inputField2 = document.getElementById('input2');
const inputField3 = document.getElementById('input3');
const resultField = document.getElementById('ans');
const buttons = document.querySelectorAll('.cal-btn button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            // Clear all inputs
            input1 = '';
            input2 = '';
            operator = '';
            resultDisplayed = false;
            inputField1.value = '';
            inputField2.value = '';
            inputField3.value = '';
            resultField.innerText = '0';
        } else if (value === 'X') {
            // Clear the last input
            if (operator) {
                input2 = '';
                inputField3.value = '';
            } else {
                input1 = '';
                inputField1.value = '';
            }
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            // Set the operator
            if (input1 && !operator) {
                operator = value;
                inputField2.value = operator;
            }
        } else if (value === '=') {
            // Calculate the result
            if (input1 && operator && input2) {
                let result;
                const num1 = parseFloat(input1);
                const num2 = parseFloat(input2);

                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num2 !== 0 ? num1 / num2 : 'Error';
                        break;
                    case '%':
                        result = num1 % num2;
                        break;
                }

                resultField.innerText = result;
                resultDisplayed = true;
                input1 = ''; // Allow chaining calculations
                input2 = '';
                operator = '';
                inputField1.value = input1;
                inputField2.value = '';
                inputField3.value = '';
            }
        } else {
            // Handle number input
            if (resultDisplayed) {
                input1 = '';
                input2 = '';
                operator = '';
                resultDisplayed = false;
            }

            if (!operator) {
                input1 += value;
                inputField1.value = input1;
            } else {
                input2 += value;
                inputField3.value = input2;
            }
        }
    });
});

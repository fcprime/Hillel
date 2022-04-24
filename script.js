// alert('Hello');
// let answerName = prompt('What is your name?');
// let userName = 'Nice to meet you, ' + answerName;
// alert(userName);
// let answerAge = prompt('How old are you?')
// let userAge = 2022 - answerAge;
// alert(userAge);

const enterFirstNumber = prompt('Enter first number');
const enterSecondNumber = prompt('Enter second number');


const threeNumber = +enterFirstNumber + +enterSecondNumber;
const sum = enterFirstNumber + '+' + enterSecondNumber + '=' + threeNumber;
console.log(sum);

const minusNumber = +enterFirstNumber - +enterSecondNumber;
const diff = enterFirstNumber + '-' + enterSecondNumber + '=' + minusNumber;
console.log(diff);


const multiplyNumber = +enterFirstNumber * +enterSecondNumber;
const mult = enterFirstNumber + '*' + enterSecondNumber + '=' + multiplyNumber;
console.log(mult);

const divideNumber = +enterFirstNumber / +enterSecondNumber;
const div = enterFirstNumber + '/' + enterSecondNumber + '=' + divideNumber;
console.log(div);

// alert('Hello');
// let answerName = prompt('What is your name?');
// let userName = 'Nice to meet you, ' + answerName;
// alert(userName);
// let answerAge = prompt('How old are you?')
// let userAge = 2022 - answerAge;
// alert(userAge);




// const enterFirstNumber = prompt('Enter first number');
// const enterSecondNumber = prompt('Enter second number');


// const threeNumber = +enterFirstNumber + +enterSecondNumber;
// const sum = enterFirstNumber + '+' + enterSecondNumber + '=' + threeNumber;
// console.log(sum);


// const minusNumber = +enterFirstNumber - +enterSecondNumber;
// const diff = enterFirstNumber + '-' + enterSecondNumber + '=' + minusNumber;
// console.log(diff);


// const multiplyNumber = +enterFirstNumber * +enterSecondNumber;
// const mult = enterFirstNumber + '*' + enterSecondNumber + '=' + multiplyNumber;
// console.log(mult);

// const divideNumber = +enterFirstNumber / +enterSecondNumber;
// const div = enterFirstNumber + '/' + enterSecondNumber + '=' + divideNumber;
// console.log(div);





const chooseOperations = prompt('Choose your\'re operations');
const enterFirstNumber = prompt('Enter first number');

if (chooseOperations === 'cos')
  alert(Math.cos(+enterFirstNumber));
 else if(chooseOperations === 'sin')
  alert(Math.sin(+enterFirstNumber));
 else if(chooseOperations === 'pow'){
  const enterSecondNumber = prompt('Enter second number');
  alert(Math.pow(+enterFirstNumber, enterSecondNumber));
};

if (chooseOperations === '*'){
  const enterSecondNumber = prompt('Enter second number');
  alert(+enterFirstNumber * +enterSecondNumber);
} else if (chooseOperations === '-'){
  const enterSecondNumber = prompt('Enter second number');
  alert(+enterFirstNumber - +enterSecondNumber);
} else if (chooseOperations === '+'){
  const enterSecondNumber = prompt('Enter second number');
  alert(+enterFirstNumber + +enterSecondNumber);
} else if(chooseOperations === '/'){
  const enterSecondNumber = prompt('Enter second number');
  alert(+enterFirstNumber / +enterSecondNumber);
} else if(chooseOperations === '%'){
  const enterSecondNumber = prompt('Enter second number');
  alert(+enterFirstNumber % +enterSecondNumber);
}


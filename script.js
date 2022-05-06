
let repeatNumber;
  do {
    let chooseOperations = +prompt(`Choose operations
  1. +
  2. -
  3. *
  4. /
  5. pow
  6. cos
  7. sin`);
   while (chooseOperations != chooseOperations) {
    chooseOperations = +prompt('Enter a number!');
  };

  const enterFirstNumber = +prompt('Enter first number');
  
  if (chooseOperations == 1){
    const enterSecondNumber = +prompt('Enter second number');
    alert(`${enterFirstNumber} + ${enterSecondNumber} = ${enterFirstNumber + enterSecondNumber}`);
  } else if (chooseOperations == 2) {
    const enterSecondNumber = +prompt('Enter second number');
    alert(`${enterFirstNumber} - ${enterSecondNumber} = ${enterFirstNumber - enterSecondNumber}`);
  } else if (chooseOperations == 3) {
    const enterSecondNumber = +prompt('Enter second number');
    alert(`${enterFirstNumber} * ${enterSecondNumber} = ${enterFirstNumber * enterSecondNumber}`);
  } else if (chooseOperations == 4) {
    const enterSecondNumber = +prompt('Enter second number');
    alert(`${enterFirstNumber} / ${enterSecondNumber} = ${enterFirstNumber / enterSecondNumber}`);
  } else if (chooseOperations == 5) {
    const enterSecondNumber = +prompt('Enter second number');
    alert(`${enterFirstNumber}, ${enterSecondNumber} = ${Math.pow(enterFirstNumber, enterSecondNumber)}`);
  }
  
  switch (chooseOperations){
    case 6: alert(`${enterFirstNumber} = ${Math.cos(enterFirstNumber)}`);
      break;
    case 7: alert(`${enterFirstNumber} = ${Math.sin(enterFirstNumber)}`);
      break;
  }
  repeatNumber = confirm('Repeat enter number / No Repeat');
  localStorage.setItem('chooseOperations', enterFirstNumber);
  console.log(localStorage.getItem('chooseOperations'));
  } while (repeatNumber === true);



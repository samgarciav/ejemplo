function returnText() {
  let input = document.getElementById("text").value;
  document.getElementById('message').innerHTML = `Your wrote "${input}"`;
}

function sumAllUp() {
  let number = parseFloat(document.getElementById("number").value);
  document.getElementById('summed').innerHTML = sumAll(number);
}

const sumAll = number => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum
}

function numbersOperation() {
  let num1 = parseFloat(document.querySelectorAll(".numbers")[0].value);
  let num2 = parseFloat(document.querySelectorAll(".numbers")[1].value);
  let operation = document.getElementById("operation");
  let result;
  switch (operation.value) {
    case "sum":
      result = sum(num1, num2);
      break
    case "rest":
      result = rest(num1, num2);
      break
    case "multiply":
      result = multiply(num1, num2);
      break
    case "divide":
      result = divide(num1, num2);
      break
  }
  document.getElementById('results').innerHTML = result;
}


// function declaration
function sum(num1, num2) {
  return num1 + num2;
}

//function expression
const rest = function (num1, num2) {
  return num1 - num2
}

// Arrow function
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;





function myFunction() {
  let input = document.getElementById("text").value;
  document.getElementById('message').innerHTML = `Your wrote "${input}"`;
}

function sumAllUp() {
  let number = parseFloat(document.getElementById("number").value);
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  document.getElementById('summed').innerHTML = sum;
}

function numbersOperation() {
  let num1 = parseFloat(document.querySelectorAll(".numbers")[0].value);
  let num2 = parseFloat(document.querySelectorAll(".numbers")[1].value);
  let operation = document.getElementById("operation");
  let result;
  switch (operation.value) {
    case "multiply":
      result = num1 * num2;
      break
    case "sum":
      result = num1 + num2;
      break
    case "rest":
      result = num1 - num2;
      break
    case "divide":
      result = num1 / num2;
      break
  }
  document.getElementById('results').innerHTML = result;
}






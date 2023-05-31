const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", handlerClick);
});
function handlerClick() {
  alert("click");
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mutly(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(
  calculator(10, 5, add),
  calculator(10, 5, sub),
  calculator(10, 5, mutly),
  calculator(10, 5, div)
);

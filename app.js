const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", handlerClick);
});
function handlerClick() {
  alert("click");
}

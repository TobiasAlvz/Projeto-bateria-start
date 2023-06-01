const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", soundClick);
});

function soundClick() {
  let sound = new Audio("./sounds/tom-1.mp3");
  sound.play();
  this.style.color = "red";
}

const governanta = {
  nome: "ad",
  age: 19,
  work: true,
};

console.log(governanta);

const one = document.querySelector(".btn1");
const two = document.querySelector(".btn2");
const three = document.querySelector(".btn3");
const four = document.querySelector(".btn4");
const five = document.querySelector(".btn5");
const six = document.querySelector(".btn6");
const seven = document.querySelector(".btn7");
const eight = document.querySelector(".btn8");
const nine = document.querySelector(".btn9");
const zero = document.querySelector(".btn0");
const clear = document.querySelector(".clear");
const egal = document.querySelector(".egal");
const plus = document.querySelector(".sum");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const screen = document.querySelector("#result");

one.addEventListener("click", () => {
  console.log("1");
  display(1);
});

two.addEventListener("click", () => {
  console.log("2");
  display(2);
});

three.addEventListener("click", () => {
  console.log("3");
  display(3);
});

four.addEventListener("click", () => {
  console.log("4");
  display(4);
});

five.addEventListener("click", () => {
  console.log("5");
  display(5);
});

six.addEventListener("click", () => {
  console.log("6");
  display(6);
});

seven.addEventListener("click", () => {
  console.log("7");
  display(7);
});

eight.addEventListener("click", () => {
  console.log("8");
  display(8);
});

nine.addEventListener("click", () => {
  console.log("9");
  display(9);
});

zero.addEventListener("click", () => {
  console.log("0");
  display(0);
});

clear.addEventListener("click", () => {
  console.log("clear");
});

egal.addEventListener("click", () => {
  console.log("egal");
});

plus.addEventListener("click", () => {
  console.log("+");
  display("+");
});

minus.addEventListener("click", () => {
  console.log("-");
  display("-");
});

multiply.addEventListener("click", () => {
  console.log("*");
  display("*");
});

divide.addEventListener("click", () => {
  console.log("/");
  display("/");
});

function display(value) {
  screen.value += value;
}

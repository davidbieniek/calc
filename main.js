let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");
let num4 = document.getElementById("number4");
let num5 = document.getElementById("number5");
let num6 = document.getElementById("number6");
let num7 = document.getElementById("number7");
let num8 = document.getElementById("number8");
let num9 = document.getElementById("number9");

let plus = document.getElementById("numberPlus");
let minus = document.getElementById("numberMinus");
let deleted = document.getElementById("numberDeleted");
let multi = document.getElementById("numberMulti");
let division = document.getElementById("numberDivision");
let equa = document.getElementById("numberEqu");

let numValue = document.getElementById("val");

num1.addEventListener("click", () => {
  addNumbers(1);
});

num2.addEventListener("click", () => {
  addNumbers(2);
});

num3.addEventListener("click", () => {
  addNumbers(3);
});

num4.addEventListener("click", () => {
  addNumbers(4);
});

num5.addEventListener("click", () => {
  addNumbers(5);
});

num6.addEventListener("click", () => {
  addNumbers(6);
});

num7.addEventListener("click", () => {
  addNumbers(7);
});

num8.addEventListener("click", () => {
  addNumbers(8);
});

num9.addEventListener("click", () => {
  addNumbers(9);
});

function plusClickHandler() {
  addNumbers("+");
  plus.removeEventListener("click", plusClickHandler);
  minus.removeEventListener("click", minusClickHandler);
  multi.removeEventListener("click", multiClickHandler);
  division.removeEventListener("click", divisionClickHandler);
}

function minusClickHandler() {
  addNumbers("-");
  plus.removeEventListener("click", plusClickHandler);
  minus.removeEventListener("click", minusClickHandler);
  multi.removeEventListener("click", multiClickHandler);
  division.removeEventListener("click", divisionClickHandler);
}

function multiClickHandler() {
  addNumbers("*");
  plus.removeEventListener("click", plusClickHandler);
  minus.removeEventListener("click", minusClickHandler);
  multi.removeEventListener("click", multiClickHandler);
  division.removeEventListener("click", divisionClickHandler);
}

function divisionClickHandler() {
  addNumbers("/");
  plus.removeEventListener("click", plusClickHandler);
  minus.removeEventListener("click", minusClickHandler);
  multi.removeEventListener("click", multiClickHandler);
  division.removeEventListener("click", divisionClickHandler);
}

plus.addEventListener("click", plusClickHandler);
minus.addEventListener("click", minusClickHandler);
multi.addEventListener("click", multiClickHandler);
division.addEventListener("click", divisionClickHandler);

function addNumbers(value) {
  numValue.value += value;
}

deleted.addEventListener("click", () => {
  numValue.value = "";
});

equa.addEventListener("click", () => {
  let string = numValue.value;
  var result = eval(string);
  numValue.value = result;
  plus.addEventListener("click", plusClickHandler);
  minus.addEventListener("click", minusClickHandler);
  multi.addEventListener("click", multiClickHandler);
  division.addEventListener("click", divisionClickHandler);
});

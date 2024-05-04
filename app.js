let displaybefore = document.getElementById("display");
let displayresult = document.getElementById("display2");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let add = document.getElementById("addition");
let sub = document.getElementById("subtract");
let multi = document.getElementById("multiply");
let divide = document.getElementById("divide");
let dot = document.getElementById("dot");
let percent = document.getElementById("percent");
let answer = document.getElementById("answer");
let clear = document.getElementById("clear");
let $delete = document.getElementById("delete");
let showBefore = document.getElementById("showBefore");
console.log(showBefore);

function print_zero() {
  const textNode = document.createTextNode("0");
  displaybefore.appendChild(textNode);
}
function print_one() {
  const textNode = document.createTextNode("1");
  displaybefore.appendChild(textNode);
}
function print_two() {
  const textNode = document.createTextNode("2");
  displaybefore.appendChild(textNode);
}
function print_three() {
  const textNode = document.createTextNode("3");
  displaybefore.appendChild(textNode);
}
function print_four() {
  const textNode = document.createTextNode("4");
  displaybefore.appendChild(textNode);
}
function print_five() {
  const textNode = document.createTextNode("5");
  displaybefore.appendChild(textNode);
}
function print_six() {
  const textNode = document.createTextNode("6");
  displaybefore.appendChild(textNode);
}
function print_seven() {
  const textNode = document.createTextNode("7");
  displaybefore.appendChild(textNode);
}
function print_eight() {
  const textNode = document.createTextNode("8");
  displaybefore.appendChild(textNode);
}
function print_nine() {
  const textNode = document.createTextNode("9");
  displaybefore.appendChild(textNode);
}
function print_plus() {
  const textNode = document.createTextNode("+");
  displaybefore.appendChild(textNode);
}
function print_minus() {
  const textNode = document.createTextNode("-");
  displaybefore.appendChild(textNode);
}
function print_multi() {
  const textNode = document.createTextNode("*");
  displaybefore.appendChild(textNode);
}
function print_divide() {
  const textNode = document.createTextNode("/");
  displaybefore.appendChild(textNode);
}
function print_per() {
  const textNode = document.createTextNode("%");
  displaybefore.appendChild(textNode);
}
function print_dot() {
  const textNode = document.createTextNode(".");
  displaybefore.appendChild(textNode);
}

// Clear function
function clear_display() {
  window.location.reload(true);
  //   displaybefore.innerText = "0";
  //   displayresult.innerText = "result";
}

// Delete function
function delete_last_char() {
  displaybefore.innerText = displaybefore.innerText.slice(0, -1);
}

function perform_opt() {
  // displayresult.innerText = eval(displaybefore.innerText);
  let expression = displaybefore.innerText;
  let allNumbers = expression.match(/[0-9]+(?:\.[0-9]+)?/g); // Find numbers in the expression
  let operators = expression.match(/[-+*/%]/g); // Find all operators in the expression

  let result;

  if (allNumbers.length >= 2 && operators) {
    num1 = parseFloat(allNumbers[0]);
    for (let i = 0; i < operators.length; i++) {
      num2 = parseFloat(allNumbers[i + 1]);
      switch (operators[i]) {
        case "+":
          num1 += num2;
          break;
        case "-":
          num1 -= num2;
          break;
        case "*":
          num1 *= num2;
          break;
        case "/":
          num1 /= num2;
          break;
        case "%":
          num1 %= num2;
          break;
        default:
          num1 = "invalid expressions";
      }
      result = num1;
    }
  } else {
    result = "Add operator";
  }
  displayresult.innerText = result;
}
function changeColorCMD(ele) {
  ele.style.backgroundColor = "#a3a3a3";
}
function defaultColorForCMD(ele) {
  ele.style.backgroundColor = "#878282";
}

function changeColorNum(ele) {
  ele.style.backgroundColor = "#343434";
}
function defaultColorForNum(ele) {
  ele.style.backgroundColor = "#181717";
}

function changeColorOpt(ele) {
  ele.style.backgroundColor = "#ffa00b";
}
function defaultColorForOpt(ele) {
  ele.style.backgroundColor = "#c9800d";
}

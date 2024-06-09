let displaybefore = document.getElementById("display");
let displayresult = document.getElementById("display2");

function print(num) {
    displaybefore.innerHTML += num;
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
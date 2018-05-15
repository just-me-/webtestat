/**
 * core
 */

//"use strict";

//Vars
let upperDisplay;
let lowerDisplay;

let calculator = {
    firstNumber: undefined,
    secondNumber: undefined,
    operator: undefined
};

//Methods
function calculate () {
    "use strict";
    if (calculator.firstNumber === undefined || calculator.secondNumber === undefined) {
        return undefined;
    }

    switch(calculator.operator) {
        case "+":
            return calculator.firstNumber + calculator.secondNumber;
        case "-":
            return calculator.firstNumber - calculator.secondNumber;
        case "*":
            return calculator.firstNumber * calculator.secondNumber;
        case "/":
            return calculator.secondNumber === 0 ? undefined : (calculator.firstNumber / calculator.secondNumber);
        default:
            //console.log("defaultP?? WTF=? unknown operator o.O");
            return undefined;
    }
}

function executeCalculation () {
    "use strict";
    calculator.firstNumber = calculate();
    calculator.secondNumber = undefined;
}

function cleanObject() {
    "use strict";
    calculator.firstNumber = undefined;
    calculator.secondNumber = undefined;
    calculator.operator = undefined;
}

// Setter and Getter
function setOperator(val) {
    "use strict";
    calculator.operator = val;
}

function setFirstNumber(val) {
    "use strict";
    calculator.firstNumber = val;
}

function setSecondNumber(val) {
    "use strict";
    calculator.secondNumber = val;
}

function getFirstNumber() {
    "use strict";
    return calculator.firstNumber;
}

/**
 * UI
 */

function cleanDisplay() {
    "use strict";
    upperDisplay.innerText = "";
    lowerDisplay.innerText = "";
}

function updateViewAfterSolve() {
    "use strict";
    if (getFirstNumber()===undefined || isNaN(getFirstNumber())){
        upperDisplay.innerText = "Ein Fehler$Invalid#!?Error%3rR0r";
        lowerDisplay.innerText = "";
    } else {
        lowerDisplay.innerText = getFirstNumber();
        upperDisplay.innerText = "";
    }
}

function numberPressed(e) {
    "use strict";
    let buttonValue = parseInt(e.target.value);

    //In case error message is shown:
    if ( upperDisplay.innerText !== "" && isNaN(parseInt(upperDisplay.innerText))) {
        cleanDisplay();
    }

    lowerDisplay.innerText += buttonValue;
}

function operatorPressed(e) {
    "use strict";
    setOperator(e.target.value);

    if (upperDisplay.innerText === "" || isNaN(getFirstNumber())) {
        setFirstNumber(parseFloat(lowerDisplay.innerText));
        upperDisplay.innerText = lowerDisplay.innerText + " " + e.target.value;
        lowerDisplay.innerText = "";
    } else {                                                                        //If just the operator is switched
       upperDisplay.innerText = parseFloat(upperDisplay.innerText) + " " + e.target.value;
    }
}

function cPressed() {
    "use strict";
    cleanDisplay();
    cleanObject();
}

function solvePressed() {
    "use strict";
    setSecondNumber(parseInt(lowerDisplay.innerText));
    executeCalculation();
    updateViewAfterSolve();
}

// function devLog(msg) {
//     console.log(`****** ${msg} ******`);
//     console.log("Upper Display: " + upperDisplay.innerText);
//     console.log("Lower Display: " + lowerDisplay.innerText);
//     console.log("First Number: " + calculator.firstNumber);
//     console.log("Second Number: " + calculator.firstNumber);
//     console.log("Operator: " + calculator.operator);
// }

window.addEventListener('load', function() {
    "use strict";
    //initializing work
    upperDisplay = document.getElementById("output");
    lowerDisplay = document.getElementById("input");
    upperDisplay.innerText = "Welcome";

    document.querySelectorAll("button.number").forEach( (b) => {
        b.addEventListener("click", numberPressed);
        }
    );

    document.querySelectorAll("button.operator").forEach( (b) => {
        b.addEventListener("click", operatorPressed);
        }
    );

    document.getElementById("key-c").addEventListener("click", cPressed);
    document.getElementById("key-=").addEventListener("click", solvePressed);
});

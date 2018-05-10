/**
 * core
 */

"use strict";

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
        calculator.firstNumber = calculate();
        calculator.secondNumber = undefined;
}

function cleanObject() {
    calculator.firstNumber = undefined;
    calculator.secondNumber = undefined;
    calculator.operator = undefined;
}

// Setter and Getter
function setOperator(val) {
    calculator.operator = val;
}

function setFirstNumber(val) {
    calculator.firstNumber = val;
}

function setSecondNumber(val) {
    calculator.secondNumber = val;
}

function getFirstNumber() {
    return calculator.firstNumber;
}

/**
 * UI
 */

function cleanDisplay() {
    upperDisplay.innerText = "";
    lowerDisplay.innerText = "";
}

function updateViewAfterSolve() {
    if (getFirstNumber()===undefined || isNaN(getFirstNumber())){
        upperDisplay.innerText = "Ein Fehler$Invalid#!?Error%3rR0r";
        lowerDisplay.innerText = "";
    } else {
        lowerDisplay.innerText = getFirstNumber();
        upperDisplay.innerText = "";
    }
}

function numberPressed(e) {
    let buttonValue = parseInt(e.target.value);

    //In case error message is shown:
    if ( upperDisplay.innerText !== "" && isNaN(parseInt(upperDisplay.innerText))) {
        cleanDisplay();
    }

    lowerDisplay.innerText += buttonValue;
}

function operatorPressed(e) {
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
    cleanDisplay();
    cleanObject();
}

function solvePressed() {
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
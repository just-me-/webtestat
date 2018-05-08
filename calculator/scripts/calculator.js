/**
 * core
 */
"use strict";

let upperDisplay;
let lowerDisplay;

let calculator = {
    firstNumber: undefined,
    secondNumber: undefined,
    operator: undefined
};

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
            //console.log("defaultP?? WTF=? unknown button o.O");
            return undefined;
    }

}

function checkCalculation () {
    if (calculator.secondNumber !== undefined) {
        calculator.firstNumber = calculate();
        calculator.secondNumber = undefined;
    }
}

function cleanObject() {
    calculator.firstNumber = undefined;
    calculator.secondNumber = undefined;
    calculator.operator = undefined;

}

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

function updateView() {
    // console.log(getFirstNumber());

    if (getFirstNumber()===undefined || isNaN(getFirstNumber())){
        upperDisplay.innerText = "Ein Fehler$Invalid#!?Error%3rR0r";
        lowerDisplay.innerText = "";
    } else {
        lowerDisplay.innerText = getFirstNumber();
        upperDisplay.innerText = "";
    }

}

function numberPressed(e) {
    // console.log("Number");
    let buttonValue = parseInt(e.target.value);

    if ( upperDisplay.innerText !== "" && isNaN(parseInt(upperDisplay.innerText))) {
        cleanDisplay();
    }

    lowerDisplay.innerText += buttonValue;
}

function operatorPressed(e) {
    // console.log("Operator");
    setOperator(e.target.value);
    setFirstNumber(parseInt(lowerDisplay.innerText));
    upperDisplay.innerText = lowerDisplay.innerText + " " + e.target.value;
    lowerDisplay.innerText = "";
    //if (lowerDisplay.innerText = "eine nummer") nur operator setzen
    //sonst das oben
    //odder so irgendwie
}



function cPressed() {
    cleanDisplay();
    cleanObject();
}

function solvePressed() {
    setSecondNumber(parseInt(lowerDisplay.innerText));
    checkCalculation();
    updateView();
}

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
/**
 * core
 */

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
            consoloe.log("defaultP?? WTF=?");
            return undefined;
    }

}

function checkCalculation () {
    if (calculator.secondNumber != undefined) {
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


/**
 * UI
 */

function cleanDisplay() {
    upperDisplay.innerText = "";
    lowerDisplay.innerText = "";
}

function numberPressed(e) {
    console.log("Number");
    let buttonValue = parseInt(e.target.value);

    if ( upperDisplay.innerText != "" && isNaN(parseInt(upperDisplay.innerText))) {
        cleanDisplay();
    }

    lowerDisplay.innerText += buttonValue;
}

function operatorPressed(e) {
    console.log("Operator");
    setOperator(e.target.value);
    setFirstNumber(parseInt(lowerDisplay.innerText));
    upperDisplay.innerText = lowerDisplay.innerText + " " + e.target.value;
    lowerDisplay = "";
}



function commandPressed(e) {
    console.log("Cpommand");

}

window.addEventListener('load', function() {
    //initializing work
    upperDisplay = document.getElementById("output");
    lowerDisplay = document.getElementById("input");
    upperDisplay.innerText = "Welcome";

    document.querySelectorAll("button.number").forEach( () => {
        addEventListener("click", numberPressed);
        }
    );

    document.querySelectorAll("button.operator").forEach( () => {
            addEventListener("click", operatorPressed);
        }
    );

    document.querySelectorAll("button.command").forEach( () => {
            addEventListener("click", commandPressed);
        }
    );
});
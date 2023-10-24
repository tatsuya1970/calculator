const output = document.getElementById("output");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";
let previousValue = "";
let operation = null;

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        const value = e.target.innerText;

        if (value >= "0" && value <= "9") {
            currentValue += value;
            updateDisplay();
        } else if (["+", "-", "×", "÷"].includes(value)) {
            if (!operation) {
                operation = value;
                previousValue = currentValue;
                currentValue = "";
            } else {
                compute();
                operation = value;
                previousValue = currentValue;
                currentValue = "";
            }
        } else if (value === "=") {
            compute();
            operation = null;
        } else if (value === "AC") {
            currentValue = "";
            previousValue = "";
            operation = null;
            updateDisplay();
        } 
        // 他の機能(+/-, % など)を追加する場合はこちらに実装してください
    });
});

function updateDisplay() {
    output.innerText = currentValue;
}

function compute() {
    switch (operation) {
        case "+":
            currentValue = (parseFloat(previousValue) + parseFloat(currentValue)).toString();
            break;
        case "-":
            currentValue = (parseFloat(previousValue) - parseFloat(currentValue)).toString();
            break;
        case "×":
            currentValue = (parseFloat(previousValue) * parseFloat(currentValue)).toString();
            break;
        case "÷":
            currentValue = (parseFloat(previousValue) / parseFloat(currentValue)).toString();
            break;
        default:
            return;
    }
    updateDisplay();
}

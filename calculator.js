// script.js
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    let operator = "";
    let previousInput = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.dataset.value;
  
        if (value === "C") {
          currentInput = "";
          previousInput = "";
          operator = "";
          display.textContent = "0";
        } else if (value === "=") {
          if (operator && currentInput && previousInput) {
            currentInput = eval(`${previousInput}${operator}${currentInput}`);
            display.textContent = currentInput;
            previousInput = currentInput;
            operator = "";
          }
        } else if (["+", "-", "*", "/"].includes(value)) {
          if (currentInput) {
            operator = value;
            previousInput = currentInput;
            currentInput = "";
          }
        } else {
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });
  });
  
const totalScreen = document.getElementById("total-screen");
const partialScreen = document.getElementById("partial-screen");
const calculatorKeys = document.querySelectorAll("button");
const screenToggle = document.querySelector("#screen");

screenToggle.classList.add("bg-gray-900");
screenToggle.classList.add("text-gray-700");

const operators = ["+", "-", "*", "/", "X"];
//["=","DEL"]

let number = "";
let number2 = "";
let operator = "";
let completOperation = "";
let calculateTotal;
function hadleClick(event) {
  const btnValue = event.target.textContent;
  const hasDotNum = number.split("").includes(".");
  const hasDotNum2 = number2.split("").includes(".");
  const numBtn = !isNaN(btnValue) || btnValue === "." ? btnValue : ""; // verifica si es un numero o una coma
  const isEqual = btnValue === "=";
  const isClear = btnValue === "C";
  const isOperator = operators.some((operator) => btnValue.includes(operator)); // verifica si es un operador valido

  //llama a la funcion clearScreen
  if (isClear) clearScreen(event);
  //llama a la funcion calculateOperation
  if (isEqual && number && operator && number2) calculateOperation(event);
  //llama a la funcion includeOperator
  if (isOperator && number) includeOperator(btnValue);
  //llama a la funcion processCalculation
  processCalculation(isOperator, numBtn, hasDotNum, hasDotNum2);
}
const handleKeyDown = document.querySelector("#on-off");
handleKeyDown.addEventListener("click", () => {
  handleKeyDown.textContent === "OFF"
    ? (handleKeyDown.textContent = "ON")
    : (handleKeyDown.textContent = "OFF");
  if (handleKeyDown.textContent === "ON") {
    screenToggle.classList.remove("bg-gray-900");
    screenToggle.classList.remove("text-gray-700");
    screenToggle.classList.add("bg-green-900");

    calculatorKeys.forEach((button) =>
      button.addEventListener("click", hadleClick)
    );
  } else {
    totalScreen.textContent = "0";
    partialScreen.textContent = "0";
    screenToggle.classList.remove("bg-green-900");
    screenToggle.classList.add("bg-gray-900");
    screenToggle.classList.add("text-gray-700");
    calculatorKeys.forEach((button) =>
      button.removeEventListener("click", hadleClick)
    );
  }
});

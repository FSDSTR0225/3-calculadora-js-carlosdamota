const totalScreen = document.getElementById("total-screen");
const partialScreen = document.getElementById("partial-screen");
const calculatorKeys = document.querySelectorAll('button')
const screenToggle = document.querySelector("#screen")

screenToggle.classList.add("bg-gray-900")
screenToggle.classList.add("text-gray-700")


const operators = ["+", "-","*", "/","X"] 
//["=","DEL"]


const calculate = (number, operator, number2) => {
    const numA = Number(number)
    const numB = Number(number2)
    const  operations = {
        "+": (numA, numB) => numA + numB,
        "-" : (numA, numB) => numA - numB,
        "X" : (numA, numB) => numA * numB,
        "/" : (numA, numB) => {
            if(numB === 0) {
                return "Error"
            }
            return numA / numB
        }
    }
    console.log(numA)
    console.log(numB)
    return (operations[operator](numA, numB)).toFixed(2)
}

const clearScreen = () => {
    number = ""
    number2 = ""
    operator = ""
    completOperation = ""
    calculateTotal = ""
    partialScreen.textContent = "0"
    totalScreen.textContent = "0"
}

const calculateOperation = () => {
    if(number && operator && number2){
        calculateTotal = calculate(number,operator,number2)
        completOperation += number2
        console.log(calculateTotal)
        partialScreen.textContent = calculateTotal
        totalScreen.textContent = completOperation
        
        number = calculateTotal
        number2 =""
        operator =""
    }
}

const includeOperator = (btnValue) =>{
if( !operator   && number){
    if(completOperation){
        completOperation = ""}
    completOperation += number
    operator = btnValue 
    partialScreen.textContent = ""
    completOperation += operator === "*" ? " x " :  ` ${operator} `
    totalScreen.textContent = completOperation}
}

processCalculation = (isOperator, numBtn, hasDotNum, hasDotNum2) => {
    if( !operator && isOperator && number){
        if(completOperation){
            completOperation = ""}
        completOperation += number
        operator = btnValue 
        partialScreen.textContent = ""
        completOperation += operator === "*" ? " x " :  ` ${operator} `
        totalScreen.textContent = completOperation
    }
    if( number && operator) {
        if(!number2 && numBtn === ".") {
            number2 = "0."
        }else if(!hasDotNum2 && numBtn === ".") {
            number2 += numBtn
        }else if(numBtn !== ".")
            {number2 += numBtn}
            partialScreen.textContent = number2
    }else{
        number 
        if(!number && numBtn === ".") {
            number = "0."
            partialScreen.textContent = number2
        }else if(!hasDotNum && numBtn === ".") {
            number += numBtn
            partialScreen.textContent = number
        }else if(numBtn !== "."){number += numBtn
            }
            if(completOperation){
                completOperation = ""}
            partialScreen.textContent = number
    }
    console.log(number)
    console.log(operator)
    console.log(number2)
}




let number = ""
let number2 = ""
let operator = ""
let completOperation = ""
let calculateTotal
function hadleClick(event) {
   const btnValue = event.target.textContent
   const hasDotNum = number.split("").includes(".") 
    const hasDotNum2 = number2.split("").includes(".")
   const numBtn = !isNaN(btnValue) || btnValue === "." ? btnValue : ""
   const isEqual = btnValue === "="
   const isClear = btnValue === "C"
   const isOperator = operators.some(operator => btnValue.includes(operator)) 
    if (isClear) clearScreen(event)
    
    if(isEqual && number && operator && number2)calculateOperation(event)

      if(isOperator && number) includeOperator(btnValue)

    processCalculation(isOperator, numBtn, hasDotNum, hasDotNum2)
   
}
const handleKeyDown = document.querySelector("#on-off")
handleKeyDown.addEventListener("click", () => {
    handleKeyDown.textContent === "OFF" ? handleKeyDown.textContent = "ON" : handleKeyDown.
    textContent = "OFF"
    if(handleKeyDown.textContent === "ON"){
        screenToggle.classList.remove("bg-gray-900")
screenToggle.classList.remove("text-gray-700")
screenToggle.classList.add("bg-green-900")

    calculatorKeys.forEach(button => button.addEventListener('click', hadleClick));
    }else{
        totalScreen.textContent = "0"
        partialScreen.textContent = "0"
        screenToggle.classList.remove("bg-green-900")
        screenToggle.classList.add("bg-gray-900")
        screenToggle.classList.add("text-gray-700")
        calculatorKeys.forEach(button => button.removeEventListener('click', hadleClick));
    }
})

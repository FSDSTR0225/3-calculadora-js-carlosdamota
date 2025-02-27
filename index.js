const totalScreen = document.getElementById("total-screen");
const partialScreen = document.getElementById("partial-screen");
const calculatorKeys = document.querySelectorAll('button')

console.log(calculatorKeys);


const operators = ["+", "-", "*", "/","=","DEL"] 



const calculate = (number, operator, number2) => {
    const numA = Number(number)
    const numB = Number(number2)
    const  operations = {
        "+":(numA, numB) => numA + numB,
        "-" : (numA, numB) => numA - numB ,
        "*" : (numA, numB) => numA * numB,
        "/" : (numA, numB) => numA / numB, 
    }
    console.log(numA)
    console.log(numB)
    return operations[operator](numA, numB)
}

let number = ""
let number2 = ""
let operator = ""
let calculateTotal
function hadleClick(event) {
    let completOperation = ""
    //totalScreen.textContent(completOperation)
   const btnValue = event.target.textContent
   const isEqual = btnValue === "="
   const isDel = btnValue === "DEL"
    if(isEqual && number && operator && number2) {
        calculateTotal = calculate(number,operator,number2)
        partialScreen.textContent = calculateTotal
    }
   const isOperator = operators.some(operator => btnValue.includes(operator)) 
   const numValue = !isOperator ? btnValue : ""

    if( !operator && isOperator && number && !isEqual && !isDel ){
        operator = isOperator ? btnValue : ""
        completOperation += number
        //partialScreen.textContent("")
        completOperation += operator
    }else{
        ""
    }
    if( number && operator) {
        number2 += numValue
        //partialScreen.textContent(number2)
    }else{number += numValue
        //partialScreen.textContent(number)
    }
    console.log(number)
    console.log(operator)
    console.log(number2)
}
calculatorKeys.forEach(button => button.addEventListener('click', hadleClick));


//["+", "-", "*", "/"] 
// ["C", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "=", "DEL"]
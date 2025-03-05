//realzacion de los calculos en ralacion al operador
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

//limpia la pantalla
const clearScreen = () => {
    number = ""
    number2 = ""
    operator = ""
    completOperation = ""
    calculateTotal = ""
    partialScreen.textContent = "0"
    totalScreen.textContent = "0"
}

//en relacion si hay operador y 2 numeros llama ala funcion calculate  retorna el resultado
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

//añade un operador simpre que el number no este vacio y no haya un operador
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

//si hay operador permite generar el number2 y actualizar la pantalla
//si no hay operador ni number a añade el valor de numBtn number
//solo se permite la coma si no hay coma
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
let first_number = Number(prompt("Перове значение"))
let operator = prompt("Оператор:")
let second_number = Number(prompt("Второе значение:"))

if (operator === "-") {
    let res = first_number - second_number
    alert("Ваш ответ " + String(res))
} else if (operator === "+") {
    let res = first_number + second_number
    alert(`Ваш ответ ${res}`)
} else if (operator === "*") {
    let res = first_number * second_number
    alert (`Ваш ответ ${res}`)
} else if (operator === "/") {
    let res = first_number / second_number
    alert (`Ваш ответ ${res}`)
} else if (operator === "%") {
    let res = first_number % second_number
    alert (`Ваш ответ ${res}`)
} else if (operator === "**") {
    let res = first_number ** second_number
    alert (`Ваш ответ ${res}`) 
} else {
    alert("ERROR!")
}
document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.querySelector("input")
    inputElem.addEventListener("input", calculate)
})
 
function calculate () {
    let si = 0
    let text = document.querySelector("input").value
    for ( let i = 0; i < text.length; i++ ) {
        if ("+-/*".includes(text[i])){
            si = i
        }
    }
    const firstNum = Number(text.slice(0, si))
    const secondNum = Number(text.slice(si+1, text.length))
    let result = 0
    if (text[si] == "+") result = firstNum + secondNum
    else if (text[si] == "-") result = firstNum - secondNum
    else if (text[si] == "*") result = firstNum * secondNum
    else if (text[si] == "/") result = firstNum / secondNum
     
    document.querySelector("div").innerText = result
}
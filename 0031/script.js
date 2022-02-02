document.addEventListener("DOMContentLoaded", main)

function main () {
    document.querySelector("button").addEventListener("click", toggle)
}

function toggle() {
    const lamp = document.querySelector("div")
    if (lamp.style.backgroundColor === "yellow") {
        lamp.style.backgroundColor = "white"
        btn.innerHTML = "Включить"
    } else {
        lamp.style.backgroundColor = "yellow"
        btn.innerHTML = "Выключить"
    }
}

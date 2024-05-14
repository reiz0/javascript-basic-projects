const number = document.querySelector("#value")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

let showNumber = 0
number.textContent = showNumber

const numColor = () => {
    if (showNumber < 0) {
        number.style.color = "red"
    } else if (showNumber > 0) {
        number.style.color = "green"
    } else {
        number.style.color = ""
    }
}

decrease.addEventListener("click", () => {
    showNumber -= 1
    number.textContent = showNumber
    numColor()
})

reset.addEventListener("click", () => {
    showNumber = 0
    number.textContent = showNumber
    numColor()
})

increase.addEventListener("click", () => {
    showNumber += 1
    number.textContent = showNumber
    numColor()
})
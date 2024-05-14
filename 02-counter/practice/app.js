const number = document.querySelector("#value")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

let showNumber = 0
number.textContent = showNumber

const numColor = () => {
    if (showNumber < 0) {
        number.classList.add("red")
        number.classList.remove("green")
    } else if (showNumber > 0) {
        number.classList.add("green")
        number.classList.remove("red")
    } else {
        number.classList.remove("red")
        number.classList.remove("green")
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
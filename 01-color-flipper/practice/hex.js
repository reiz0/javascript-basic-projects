const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const createColor = () => {
    let hexNums = "#"
    for (let i = 0; i < 6; i++) {
        const hexNum = hex[Math.floor(Math.random() * hex.length)]
        hexNums += `${hexNum}`
    }
    return hexNums
}

const color = document.querySelector(".color")
const button = document.querySelector("#btn")
const main = document.querySelector("main")

button.addEventListener("click", () => {
    const thisColor = createColor()
    color.textContent = thisColor
    main.style.backgroundColor = thisColor
})
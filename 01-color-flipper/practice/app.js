const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color")
const button = document.querySelector("#btn")
const main = document.querySelector("main")

button.addEventListener("click", () => {
    const thisColor = colors[Math.floor(Math.random() * 4)]
    color.textContent = thisColor
    main.style.backgroundColor = thisColor
})
console.log("functioning.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 0;
let y = 0;

function movement() {
    ctx.fillRect(0, 0, 50, 50)
    requestAnimationFrame(movement)
}

movement()
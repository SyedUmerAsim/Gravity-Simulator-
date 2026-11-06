console.log("mainfunctioning.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;

function movement(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x = x + vxl;
    x = x + vxr;
    y = y + vy
    ctx.fillRect(x, y, 50, 50)
    requestAnimationFrame(movement)
}
movement()

setInterval(function Gravity(){
    vy = vy + 0.05
})

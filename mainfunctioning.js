console.log("mainfunctioning.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;
let grounded = false;
function movement(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x = x + vxl;
    x = x + vxr;
    y = y + vy;
    ctx.fillRect(x, y, 50, 50)
    Xcollision()
    requestAnimationFrame(movement)
}
function Xcollision(){
    if (y >= canvas.height - 50){
        y = canvas.height - 50
        vy = 0
        grounded = true
    }
}


movement()

setInterval(function Gravity(){
    if (grounded === false){
        vy = vy + 0.05
    }
})

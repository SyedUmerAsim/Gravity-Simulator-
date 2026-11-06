console.log("mainfunctioning.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;
var fly = -9;
var fallspeed = 0.09;

let grounded = false;
let maxheight = false;
function movement(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x = x + vxl;
    x = x + vxr;
    y = y + vy;
    ctx.fillRect(x, y, 50, 50)
    Xcollision()
    roofcollision()
    requestAnimationFrame(movement)
}
function Xcollision(){
    if (y >= canvas.height - 50){
        y = canvas.height - 50
        vy = 0
        grounded = true
    }
}
function roofcollision(){
    if (y <= 0){
        y = 0
        vy = 0
    }
}


movement()

setInterval(function Gravity(){
    if (grounded === false){
        vy = vy + fallspeed
    }
})

function selectEarthgravity(){
    fly = -9;
    fallspeed = 0.09;
}

function selectMoongravity(){
    fly = -3;
    fallspeed = 0.01;
}

function selectMercurygravity(){
    fly = -3.7;
    fallspeed = 0.03;
}
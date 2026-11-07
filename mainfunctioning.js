console.log("mainfunctioning.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;
var fly = -9; //use in future when wanna make jumping acceleration//
var fallspeed = 0.098;

let grounded = false;
let maxheight = false;
function movement(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x = x + vxl;
    x = x + vxr;
    y = y + vy;
    ctx.fillStyle = "rgb(134, 134, 134)";
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

function dropfromtop(){
    grounded = false
    y = 0
    vy = 0
}
function selectEarthgravity(){
    fallspeed = 0.198;
}

function selectMoongravity(){
    fallspeed = 0.0162;
}

function selectMercurygravity(){
    fallspeed = 0.03;
}
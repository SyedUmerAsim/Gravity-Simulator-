console.log("mainfunctioning.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 220;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;
var fly = -9; //use in future when wanna make jumping acceleration//
var fallspeed = 0.198;

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
    document.getElementById("stat_location").innerHTML =  '<span class="underline">Location:</span> Earth'
    document.getElementById("stat_gravity").innerHTML = '<span class="underline">Gravity:</span> 9.8 m/s²'
    fallspeed = 0.198;
}
function selectMoongravity(){
    document.getElementById("stat_location").innerHTML = '<span class="underline">Location:</span> Moon'
    document.getElementById("stat_gravity").innerHTML = '<span class="underline">Gravity:</span> 1.6 m/s²'
    fallspeed = 0.022;
}
function selectMercuryMarsgravity(){
    document.getElementById("stat_location").innerHTML = "<span class=\"underline\">Location:</span> Mercury/Mars"
    document.getElementById("stat_gravity").innerHTML = '<span class="underline">Gravity:</span> 3.71 m/s²'
    fallspeed = 0.05;
}
function selectVenusgravity(){
    document.getElementById("stat_location").innerHTML = '<span class="underline">Location:</span> Venus'
    document.getElementById("stat_gravity").innerHTML = '<span class="underline">Gravity:</span> 8.87 m/s²'
    fallspeed = 0.172;
}


let planetshow = document.getElementById("planetshow")
let buttonbox = document.getElementById("buttonbox")

planetshow.addEventListener("click", function(){
    buttonbox.classList.toggle("show");
    planetshow.classList.toggle("active");
})

let measurecheck = document.getElementById("measurecheck")
let heightmeasure = document.getElementById("heightmeasure")

measurecheck.addEventListener("click", function(){
    heightmeasure.classList.toggle("show");
})

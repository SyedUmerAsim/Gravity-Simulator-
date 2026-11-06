console.log("deepfunctioning.js loaded")

addEventListener("keydown", function(e){
    if (e.code == "KeyW") vy = -5, grounded = false;
})
// ^^^ Up ^^^ //

addEventListener("keydown", function(e){
    if (e.code == 'KeyD') vxr = 5; 
})
addEventListener("keyup", function(e){
    if (e.code == 'KeyD') vxr = 0;
})
// ^^^ Right ^^^ //

addEventListener("keydown", function(e){
    if (e.code == 'KeyA') vxl = -5; 
})
addEventListener("keyup", function(e){
    if (e.code == 'KeyA') vxl = 0;
})
// ^^^ Left ^^^ //
 
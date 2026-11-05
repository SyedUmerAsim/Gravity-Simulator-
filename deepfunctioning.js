console.log("deepfunctioning.js loaded")

addEventListener("keydown", function(e){
    if (e.code == "KeyW") vyu = -5;
})
addEventListener("keyup", function(e){
    if (e.code == "KeyW") vyu = 0;
})
// ^^^ Up ^^^ //

addEventListener("keydown", function(e){
    if (e.code == "KeyS") vyd = 5;
})
addEventListener("keyup", function(e){
    if (e.code == "KeyS") vyd = 0;
})
// ^^^ Down ^^^ //

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
 
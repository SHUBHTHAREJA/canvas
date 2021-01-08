var canvas =document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);

function mymousedown (e){
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    console.log(x,y);
    circle(x,y);
}
function circle (x,y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();
}
function clearArea (){
    ctx.clearRect(0,0,canvas.width,canvas.heigth);
}
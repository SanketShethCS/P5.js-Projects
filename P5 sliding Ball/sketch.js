var x =  0
var speed = 3

function setup() {
    createCanvas(600,400);
    
}


function draw() {
    background(0);
    stroke(255);
    strokeWeight(8);
    if (x==width){
        speed = -3;
        fill(0,0,255)
    }
    else if(x == 0){
        speed = 3;
        fill(0,255,0)
    }
    ellipse(x,200,100,100);
    x=x+speed
}

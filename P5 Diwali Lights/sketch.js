var offset =0;
function setup() {
    createCanvas(640,560);
}


function draw() {
    background(0)
    strokeWeight(4);
    stroke(255);
    var x=0;  
    
    for(var x=0; x<= width;x+=50){
        fill(random(255),0,random(255))
        ellipse(x+offset,200,25,25);
    
    }
    offset=offset+1
        

    
    
}
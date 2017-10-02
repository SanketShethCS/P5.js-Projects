var bubbles=[];

function setup() {
    createCanvas(600,400);
    for(var i=0;i<50;i++)
        {
            bubbles.push(new Bubble(random(0,width),random(0,height)));
        }
}

function mousePressed(){
    for(var i=0;i<bubbles.length;i++)
        {
            bubbles[i].clicked();
        }
}

function draw() {
    background(0);    
    for (var i=0;i<bubbles.length;i++)
        {
            bubbles[i].move();
            bubbles[i].display();
        }        
}



var words=["raainbow","heart", "purple","friendship"];

var index =0;

function setup() {
    createCanvas(400,400);    
}

function draw() {
    background(0);
    fill(255);
    text(words[index],12,200);
}

function mousePressed(){
    index=index+1;
    
    if(index == words.length){
        index =0;
    }
}

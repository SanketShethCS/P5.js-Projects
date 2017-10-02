function Bubble(x,y){
    this.x = x //random(0,width),
    this.y = y//random(0,height), 
    this.col=color(255,100);
    
    this.display = function (){
    stroke(255);
    fill(this.col);    
    ellipse(this.x,this.y,24,24)   
    },
    
    this.move = function(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    }
    
    this.clicked = function(){
        var d =dist(mouseX,mouseY,this.x,this.y);
        if (d<12){
        this.col=color(random(0,255),0,random(0,255))
        }
    }
    
    
    
    
    
    
}
function Bubble(x,y){
    this.x = x //random(0,width),
    this.y = y//random(0,height), 
    this.lifespan=255;
    
    this.display = function (){
    //stroke(255);
    fill(255,this.lifespan);    
    ellipse(this.x,this.y,24,24)   
    },
    
    this.update = function(){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
    this.lifespan--;
    }
    
    this.isFinished =function(){
        if (this.lifespan<0){
                return true;
            }
        else{
            return false;
        }
    }
    
    
}
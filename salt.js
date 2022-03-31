class Salt{

    constructor(x,y,s,color){

        this.saltsize = s/20;
        this.xmin = x+this.saltsize;
        this.xmax = x+s-this.saltsize;
        this.ymin = y+this.saltsize;
        this.ymax = y+s-this.saltsize;

        this.x = random(this.xmin,this.xmax);
        this.y = random(this.ymin,this.ymax);
        this.scalar = s;
        this.color = color;
        

    }
    show(){
        stroke(0);
         fill(this.color);
         ellipse(this.x,this.y,this.saltsize,this.saltsize);
    
    }
    moves(){
        this.x = this.x + random(-10,10);
        if (this.x < this.xmin){
            this.x=this.xmin;
        }
        if (this.x > this.xmax){
            this.x=this.xmax;
        }

    }
}
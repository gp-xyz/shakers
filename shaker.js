var STYPES = ['salt','pepper','garlic','chili'];
var SCOLORS = ['#efefef','#010101','#902115','#ff0909'];
var TCOLORS = ['#000000','#ffffff','#ffffff','#168523'];
class Shaker
{

    constructor(x,y,scal,toprat,topheight,saltcount,jarcolor,xtate){
        this.x=x;
        this.y=y;
        this.scalar=scal;
        this.topratio = toprat;
        this.topheight = topheight;
        this.shakeit = false;
        this.saltcount = saltcount;
        this.jarcolor = jarcolor;
        this.xrate = xtate;

        
        this.seasoning = int(random(0,4));
        if (this.seasoning>2){
            this.shakeit = true; 
        }
        var saltlist = [];
        for (let i=0;i<this.saltcount;i++){
            var newsalt = new Salt(this.x,this.y,this.scalar,SCOLORS[this.seasoning]);
            // newsalt.show();
            saltlist.push(newsalt)

        }
        this.saltList = saltlist;
   



 
        
    }

    show(){
      
        
      
        fill(0);

        var topw = this.scalar*this.topratio;
        var toph = this.scalar*this.topheight;

        var topx = this.x+.5*this.scalar;
        var topy = this.y;

        
       ellipse(topx,topy,topw,toph);

        fill(this.jarcolor);

        rect(this.x,this.y,this.scalar,this.scalar);
        stroke(1);
        fill(SCOLORS[this.seasoning])
        
        for (let n=0;n<this.saltList.length;n++){
            if (this.shakeit){
                this.saltList[n].moves();
            }
            this.saltList[n].show();
     

        textSize(this.scalar / 5);
        fill(TCOLORS[this.seasoning]);
        text(STYPES[this.seasoning],this.x + .1*this.scalar,topy+this.scalar*.5);
            
    
 

        }
       

        

        
    


    }


}


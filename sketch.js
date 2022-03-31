var shakerXs = [100,200,300,400,500];
var shakerYs = [100,200,300,400,500];
var shakerRatios = [.4,.5,.9];
var shakerScals = [300,100,200];

var shakerSaltCounts = [10,500,1000];
var shakerColors  = ["#fee7bc", "#ffc64a", "#ff7a5aff", "#b460a6", "#765aa6", "#4781c1", "#515e8c"];
var Xtates = [-30,30];


var shakers = []

var shk ;
function setup() {
  createCanvas(1000, 800);
  background(100);

  var shakerCount = random([1,2,4]);
  for (let n=0; n<shakerCount;n++)
  {
    shakers.push(new Shaker(random(shakerXs),random(shakerYs),random(shakerScals),random(shakerRatios),.2,random(shakerSaltCounts),random(shakerColors),random(Xtates)))

  }
  

}

function draw(){
  background(200);
  for (let n=0; n<shakers.length;n++)
  {
    shakers[n].show();
  }
  // background(100);
  // for (let i=0;i<10;i++){
  //   translate(i,i,i);
  //   sphere(10);
    
  // }
}
function mousePressed() {
  // background(100);

  // shk.show(mouseX,mouseY);

  // rotateZ(mouseZ);
}

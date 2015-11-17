var x1=100;
var y1=100;

var x2=250;
var y2=50;

var x3=30;
var y3=300;

var x4=500;
var y4=500;
var value = 0;

var value = 204;

function setup() {
createCanvas(500,500);


}
function draw() {

background(204);
noCursor();

//kurve 1 

noFill();
beginShape();
vertex(-30, -20);
bezierVertex(00, 300, 280, 275, 330, 375);
bezierVertex(400, 300, 260, 225, 330, 320);
bezierVertex(0, 0, 60, 225, 330, 320);

strokeWeight(2);
stroke (value);

endShape();

//Kurve 2 

noFill(); 
beginShape();
curveVertex(x1,y1);
curveVertex(x1,y1);
curveVertex(150,mouseY);
curveVertex(150,y3);
curveVertex(200,200);
curveVertex(mouseX,y1);
curveVertex(40,y1);
curveVertex(200,50);
curveVertex(200,200);

 stroke (255);
  endShape();

// Kurve  

noFill(); 
beginShape();

curveVertex(30,400);
curveVertex(30,500);
curveVertex(0,260);
curveVertex(150,y3);
curveVertex(00,200);
curveVertex(40,10);
curveVertex(450,50);
curveVertex(-20,-50);
curveVertex(00,100);
curveVertex(00,100);


 stroke (255);
  endShape();


// Kurve 4

noFill(); 
beginShape();
curveVertex(400,400);
curveVertex(-400,400);
curveVertex(550,x1);
curveVertex(150,mouseY-50);

 stroke (255);
 strokeWeight(1);
 endShape();

// Kurve 5

noFill(); 
beginShape();
curveVertex(-40,200);
curveVertex(-40,200);
curveVertex(50,70);
curveVertex(230,440);
curveVertex(mouseX,400);
curveVertex(-60,mouseY);
curveVertex(-80,200);

strokeWeight(2);
 stroke (255);
  endShape();


//Kurve 6
  beginShape();
vertex(-330, -330);
bezierVertex(200, 30, 30, 595, 500, mouseY-50);
bezierVertex(200, 30, mouseX+150, 565, 500, 0);
stroke (255);
endShape();


noFill(); 
beginShape();
curveVertex(400,400);
curveVertex(00,400);
curveVertex(250,mouseY+400);
curveVertex(250,y3);
curveVertex(300,300);
curveVertex(mouseX-200,400);
curveVertex(40,400);
curveVertex(x1,mouseY-40);
curveVertex(200,200);
curveVertex(x1,y1);
curveVertex(x1,y4);
curveVertex(-350,mouseY+400);
curveVertex(190,190);

 stroke (255);
  endShape();

/*
//kurve 7
beginShape();
vertex(-340, 340);
bezierVertex(50, 30, 30, 575, mouseX, mouseY+450);
bezierVertex(50, 30, 60, 505, 330, mouseY+450);
bezierVertex(50, 30, 30, 575, mouseX, mouseY+450);
stroke (255);
endShape();
*/
 



}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 170;
  }
}

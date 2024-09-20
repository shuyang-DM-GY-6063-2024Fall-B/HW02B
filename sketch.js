function setup() {
  createCanvas(720,540);
}

function draw() {

  let centerX = 360;
  let centerY = 270;
  // Set the color to use
  let color1 = "#ffaf34";//yellow
  let color2 = '#ebd8a0';//yellow gray
  let color3 = '#946724';//dark yellow
  let color4 = '#332ec6';//blue
  let color5 = '#a3b6bf';//light blue gray
  let color6 = '#486177';//dark blue gray
  let color7 = '#a55e4c';//light red gray
  let color8 = '#854b47';//dark red gray
  let color9 = '#02034d';//dark blue
  

  background(color9)
  angleMode(DEGREES)

  // draw the several light red gray and dark red gray quadrilaterals and triangles in the background
  fill(color7);
  stroke(color7);
  quad(0,0,0,200,150,150,150,0);

  fill(color8);
  stroke(color8);

  quad(0,0,30,20,80,250,0,300);
  triangle(50,0,500,0,350,100);
  triangle(375,540,720,540,580,400);
  
  fill(color7);
  stroke(color7);
  triangle(325,540,0,540,120,400);
  quad(720,0,580,0,550,200,720,250);

 // draw the eye-shaped graphics and make the circles move with mouse
  fill(color2);
  stroke(color2);
  arc(centerX, centerY-96, 535,360, 30, 150,OPEN);
  arc(centerX, centerY+96, 445,360, 200, 340,OPEN);
  
  fill(color4);
  stroke(color4);
  ellipse(centerX+(mouseX-centerX)*10/720, centerY+(mouseY-centerY)*10/720,160);
  fill(color9);
  stroke(color9);  
  ellipse(centerX+(mouseX-centerX)*40/720, centerY+(mouseY-centerY)*40/720,50);
  
  // draw the yellow triangles and gray lines across it
  let triL1 = 375;
  let triL2 = 120;

  fill(color3);
  stroke(color3);  
  triangle(centerX-triL2*4/5, centerY-3*triL1/5+3*triL2/5, centerX, centerY-3*triL1/5, centerX+triL1*4/5, centerY);
  triangle(centerX-triL1*4/5, centerY, centerX, centerY+3*triL1/5, centerX+triL2*4/5, centerY+3*triL1/5-3*triL2/5);

  push()
  strokeWeight(15)
  strokeCap(SQUARE)
  stroke(color5)
  line(480,350,200,500)
  line(200,500,230,50)
  line(230,57,360,120)
  pop()

  fill(color1)
  stroke(color1)  
  triangle(centerX-triL1*4/5, centerY, centerX, centerY-3*triL1/5, centerX+triL2*4/5, centerY-3*triL1/5+3*triL2/5);
  triangle(centerX+triL1*4/5, centerY, centerX, centerY+3*triL1/5, centerX+triL1*4/5-triL2*4/5, centerY-3*triL2/5);

  // draw 4 cubes by using rotate
  let cube1X = 0
  let cube1Y = 0
  let cube1H = 400

  push()
  translate(centerX-500,centerY-100);
  rotate(55);
  fill(color5);
  stroke(color5);
  quad(cube1X,cube1Y,cube1X+80,cube1Y-10,cube1X +80,cube1Y -10-cube1H,cube1X,cube1Y -cube1H);  
  fill(color6);
  stroke(color6);
  quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X-50,cube1Y-20); 
  fill(color3);
  stroke(color3);
  quad(cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +80,cube1Y -10-cube1H);
  pop();

  push();
  translate(centerX-500,centerY+100);
  rotate(115); 
  fill(color5);
  stroke(color5);
  quad(cube1X,cube1Y,cube1X+80,cube1Y-10,cube1X +80,cube1Y -10-cube1H,cube1X,cube1Y -cube1H)
  fill(color6);
  stroke(color6);
  quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X-50,cube1Y-20)
  fill(color3);
  stroke(color3);
  quad(cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +80,cube1Y -10-cube1H);
  pop();
 
  push()
  translate(centerX+500,centerY+100);
  rotate(235); 
  fill(color5);
  stroke(color5);
  quad(cube1X,cube1Y,cube1X+80,cube1Y-10,cube1X +80,cube1Y -10-cube1H,cube1X,cube1Y -cube1H);
  fill(color6);
  stroke(color6);
  quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X-50,cube1Y-20);
  fill(color3);
  stroke(color3);
  quad(cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +80,cube1Y -10-cube1H);
  pop();

  push()
  translate(centerX+450,centerY+50);
  rotate(315); 
  fill(color5);
  stroke(color5);
  quad(cube1X,cube1Y,cube1X+80,cube1Y-10,cube1X +80,cube1Y -10-cube1H,cube1X,cube1Y -cube1H)
  fill(color6);
  stroke(color6);
  quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X-50,cube1Y-20)
  fill(color3);
  stroke(color3);
  quad(cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +80,cube1Y -10-cube1H)
  pop()

}
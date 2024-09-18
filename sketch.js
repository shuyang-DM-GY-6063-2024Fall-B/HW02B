function setup() {
  createCanvas(720,540);
}

function draw() {
  
  let centerX = 360;
  let centerY = 270;

  let color1 = "#ffaf34";//yellow
  let color2 = '#d4b682';//yellow gray
  let color3 = '#946724';//dark yellow
  let color4 = '#332ec6'//blue
  let color5 = '#5d7585'//light blue gray
  let color6 = '#486177'//dark blue gray
  let color7 = '#a55e4c'//light red gray
  let color8 = '#854b47'//dark red gray
  let color9 = '#1e2144'//dark blue
  

  background(color9)
  angleMode(DEGREES)
  
  
  fill(color2)
  stroke(color2)
  arc(centerX, centerY-96, 535,360, 30, 150,OPEN)
  arc(centerX, centerY+96, 445,360, 200, 340,OPEN)
  
  fill(color4)
  stroke(color4)
  ellipse(centerX, centerY,160)
  fill(color9)
  stroke(color9)  
  ellipse(centerX, centerY-10,50)
  
  // let triX = 
  // let triY = 
  let triL1 = 380
  let triL2 = 120

  fill(color3)
  stroke(color3)  
  triangle(centerX-triL2*4/5, centerY-3*triL1/5+3*triL2/5, centerX, centerY-3*triL1/5, centerX+triL1*4/5, centerY)
  triangle(centerX-triL1*4/5, centerY, centerX, centerY+3*triL1/5, centerX+triL2*4/5, centerY+3*triL1/5-3*triL2/5)



  fill(color1)
  stroke(color1)  
  triangle(centerX-triL1*4/5, centerY, centerX, centerY-3*triL1/5, centerX+triL2*4/5, centerY-3*triL1/5+3*triL2/5)
  triangle(centerX+triL1*4/5, centerY, centerX, centerY+3*triL1/5, centerX+triL1*4/5-triL2*4/5, centerY-3*triL2/5)

  let cube1X = 0
  let cube1Y = 0
  let cube1H = 400

  translate(centerX-500,centerY-100);
  rotate(55);
  fill(color5);
  stroke(color5);
  quad(cube1X,cube1Y,cube1X+80,cube1Y-10,cube1X +80,cube1Y -10-cube1H,cube1X,cube1Y -cube1H)

  fill(color6);
  stroke(color6);
  quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X-50,cube1Y-20)
  
  fill(color3);
  stroke(color3);
  quad(cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +80,cube1Y -10-cube1H)
  
  
  translate(centerX,centerY);
  rotate(55);
  
  fill(color5);
  stroke(color5);
  quad(cube1X,cube1Y,cube1X+80,cube1Y-10,cube1X +80,cube1Y -10-cube1H,cube1X,cube1Y -cube1H)

  fill(color6);
  stroke(color6);
  quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X-50,cube1Y-20)
  
  fill(color3);
  stroke(color3);
  quad(cube1X,cube1Y -cube1H,cube1X-50,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +80,cube1Y -10-cube1H)

//   background('#161648');

//   fill(color1);
//   stroke(color1);
//   ellipse(ellipseX,ellipseY,ellipseD);

//   fill(color3);
//   stroke(color3);

//   let quad1X = 30;
//   let quad1Y = 100;
//   let quad1L = 20;
//   let difference = 5
//   quad(quad1X,quad1Y, quad1X,quad1Y-quad1L,quad1X+300,quad1Y+225,quad1X+300,quad1Y+225+quad1L)
//   fill(color1);
//   stroke(color1);
//   quad(quad1X-difference,quad1Y-2*difference, quad1X-difference,quad1Y-quad1L-2*difference,quad1X+300-difference,quad1Y+225-2*difference,quad1X+300-difference,quad1Y+225+quad1L-2*difference)
  
//   fill(color6);
//   stroke(color6);
//   let grayquadX = 110;
//   let grayquadY = 110;
//   let grayquadL = 140;

//   quad(grayquadX,grayquadY,grayquadX + 60,grayquadY - 15,grayquadX+ 4*grayquadL/5 + 60,grayquadY+ 3*grayquadL/5-15,grayquadX + 4*grayquadL/5,grayquadY + 3*grayquadL/5)
  
//   fill('#e2ca8a');
//   stroke('#e2ca8a');

//   quad(grayquadX+8,grayquadY+6,grayquadX + 56,grayquadY - 7 ,grayquadX+ 4*grayquadL/5 + 32,grayquadY+ 3*grayquadL/5-23,grayquadX + 4*grayquadL/5-12,grayquadY + 3*grayquadL/5-7)
  
  
//   fill(color1);
//   stroke(color1);

//   let quad2X = 100;
//   let quad2Y = 150;
//   let quad2L = 22;
  
//   quad(quad2X,quad2Y, quad2X + 30,quad2Y + 30,quad2X + 102 ,quad2Y + 12,quad2X + 72,quad2Y - 18)
  
//   let distance = 80;

//   quad(quad2X + distance,quad2Y +distance, quad2X + 30+ distance,quad2Y +30+distance,quad2X+102+ distance,quad2Y + 12 +distance,quad2X + 72+ distance,quad2Y - 18+distance)
//   fill(color2);
//   stroke(color2);

//   quad3X = quad2X + distance
//   quad3Y = quad2Y +distance



//   quad(quad3X,quad3Y,quad3X + 72,quad3Y - 18,quad3X + 80,quad3Y - 68,quad3X+8,quad3Y - 50)
//   let cube1X = 100
//   let cube1Y = 240
//   let cube1H = 120

//   quad(cube1X,cube1Y,cube1X+50,cube1Y-10,cube1X +50,cube1Y -10-cube1H,cube1X,cube1Y -cube1H)

//   stroke(color4);
//   line(ellipseX,ellipseY - ellipseD/2,ellipseX,30);
//   line(ellipseX,30,ellipseX + 90,160);

//   fill(color5);
//   stroke(color5);
//   quad(cube1X,cube1Y,cube1X,cube1Y -cube1H,cube1X-30,cube1Y-20-cube1H,cube1X-30,cube1Y-20)
  
//   fill(color3);
//   stroke(color3);
//   quad(cube1X,cube1Y -cube1H,cube1X-30,cube1Y-20-cube1H,cube1X +20,cube1Y -30-cube1H,cube1X +50,cube1Y -10-cube1H)
  
//   fill(color1);
//   stroke(color1);
//   quad(quad2X+15,quad2Y+15, quad2X + 30,quad2Y + 30,quad2X + 102 ,quad2Y + 12,quad2X + 87,quad2Y - 3)
//   fill(color6);
//   stroke(color6);
//   quad(grayquadX+ 4*grayquadL/5 + 48,grayquadY+ 3*grayquadL/5-23,grayquadX+ 4*grayquadL/5 + 60,grayquadY+ 3*grayquadL/5-15,grayquadX + 4*grayquadL/5,grayquadY + 3*grayquadL/5,grayquadX + 4*grayquadL/5-12,grayquadY + 3*grayquadL/5-8)
}
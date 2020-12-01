//Creating hr,min,second;
var hr;
var min;
var sec;
var sprite;
var secAngle,minAngle,hourAngle;

function setup() {
  createCanvas(2000,2000);
sprite =   createSprite(495, 290, 50, 50);
sprite.visible = false;

}

function draw() {
  background(1,9,20); 
  
  angleMode(DEGREES);
  
  hr = hour();
  sec = second();
  min  = minute();

  translate(500,300); 

//Converting the seconds to angles
let secAngle =  map (sec,0,60,0,360);

//Converting the minutes to angles
let minAngle  = map (min,0,60,0,360);

//Converting the hours to angles
let hourAngle = map (hr%12,0,60,0,360);


//Drawing the seconds hand
push();
stroke(255,0,0);
strokeWeight(7);
rotate(secAngle);
line(0,0,120,120);
pop ();

//Drawing the min hand
push ();
stroke(33,27,211);
strokeWeight(7);
rotate(minAngle);
line(0,0,120,120);
pop();

//Drawing the hour hand
push();
stroke(211,200,27);
strokeWeight(7);
rotate(hourAngle);
line(0,0,97,96);
pop ();

//Creating arc for sec
push ();
fill ("red");
arc(1200,300,300,300,0,secAngle);
pop ();

//Creting arc for min
push ();
fill ("yellow");
arc(931,216,300,300,0,minAngle);
pop ();

//Creating arc for hr
push ();
fill (33,27,211);
arc(584,262,300,300,270,hourAngle);
pop ();

text("secangle : "+secAngle,700,200);
text("minangle : "+minAngle,700,230);
text("hrangle : "+hourAngle,700,250);

text("Current hour : "+hr,200,200);
text("Current minute : "+min,200,210);
text("Current second : "+sec,200,220);

text ("x : "+mouseX,100,100);
text ("y : "+mouseY,200,100);

  drawSprites();
}
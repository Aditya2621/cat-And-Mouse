var garden;
var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;

function preload() {
    garden=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png")
    catImg2=loadAnimation("images/cat2.png,cat4.png");
    mouseImg2=loadAnimation("images/mouse2.png,mouse3.png");
    //load the images here
}

function setup(){
    createCanvas(1000,1000);
    //garden=createSprite(300,300);
    //garden.addImage("background",gardenImg);

    cat=createSprite(880,850,10,10);
    cat.addImage("cat",catImg);
    cat.scale=0.1;

    mouse=createSprite(400,850,10,10);
    mouse.addImage("mouse",mouseImg);
    mouse.scale=0.1;
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("catrunning",catImg2);
       cat.changeAnimation("catrunning");
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

   //For moving and changing animation write code here
    if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
    }

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
      }
   }



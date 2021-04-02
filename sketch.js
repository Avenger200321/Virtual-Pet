//Create variables here
var dog,dogimg,dogimg1 ;
var food,db ; 
function preload()
{
 dogimg=loadImage('images/dogImg.png');
 dogimg1=loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500, 500);
  db=firebase.database()
  db.ref('Food').on('value',readStock)
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale=0.15
}


function draw() {  
  background('white')
if(keyWentDown(DOWN_ARROW)){
  writeStock(food);
  dog.addImage(dogimg1)
}
  drawSprites();
  //add styles here
textSize(20)
text(`Food remaining: ${food}`,170,200)
}
function readStock(data){
  food = data.val()
  console.log(food)
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  db.ref('/').update({
    Food:x
  })
}


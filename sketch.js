var dog,sadDog,happyDog;
var feed;
var addFood;
var foodObj;
var database
var gameState,readState
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("FEED TABI");
  feed.position(500,15);
  feed.mousePressed(feed);

  addFood=createButton("ADD FOOD");
  addFood.position(400,15);
  addFood.mousePressed(addFood);

 // readState=database.ref('gameState').on("value",function(data){
  //  gameState=data.val();
 // });
   
}

function draw() {
  background(46,139,87);

  
  drawSprites();
  
  
  
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

//function to update food stock and last fed time
function getFed(){
  dog.addImage(happyDog);

  if(foodObj.foodStock()<=0){
    foodObj.updateFoodStock(foodObj.foodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.foodStock()-1)
  }
}

//function to add food in stock
function addFood(){
 
    foodStock++;
    database.ref('/').update({
      Food:foodS
    })
  }

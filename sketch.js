var Dog, DImg, HImg;
var database;
var Food, Stock;
function preload() {
	DImg = loadImage("dogImg.png");
  HImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(250, 250, 100, 100);
  Dog.addImage(DImg);
  Dog.scale = 0.15;
  database = firebase.database();
  Food = database.ref('Food');
  Food.on("value", read);
  
}


function draw() {
  background(46, 139, 87);
  fill(0);
  if (keyCode == 32 || keyCode == 70 || keyCode == 72) {
    write(Stock);
    Dog.addImage(HImg)
  }
  drawSprites();
  if (mouseY<=30){
    if (mouseX <= 400){
      text("x : "+ mouseX + ", y : "+ mouseY, mouseX + 5, mouseY + 20);
    } else{
      text("x : "+ mouseX + ", y : "+ mouseY, mouseX - 80, mouseY + 20);
    }  } else{
    if (mouseX <= 400){
      text("x : "+ mouseX + ", y : "+ mouseY, mouseX + 5, mouseY - 5);
    } else{
      text("x : "+ mouseX + ", y : "+ mouseY, mouseX - 80, mouseY - 5);
    }
  }
}

function read(data){
  Stock = data.val();
}

function write(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}

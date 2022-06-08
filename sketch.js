var bgimg;
var gato,gatoimg;


function preload(){
 bgimg = loadImage("city.jpg");
 gatoimg = loadImage("gato.png");

}

function setup() {
	createCanvas(500, 520);
	gato = createSprite(250,400);
	gato.addAnimation("parado",gatoimg);
	gato.scale = 0.3
		

}

function draw() {
	background (bgimg);
    drawSprites();
}


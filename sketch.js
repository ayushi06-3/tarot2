var bgImage;

var card1;
var yellow_cardImg;
var card1_btn,card2_btn,card3_btn,card4_btn;

function preload(){
bgImage=loadImage("assets/starry-sky.jpg");
yellow_cardImg=loadImage("assets/Yellow_card.svg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  card1_btn=createImg("assets/Yellow_card.svg.png");
  card1_btn.position(100,80);
  card1_btn.size(200,300);
  card1_btn.mouseClicked(card1)


  card2_btn=createImg("assets/Blue_card.svg.png");
  card2_btn.position(300,80);
  card2_btn.size(200,300);
  card2_btn.mouseClicked(card2)
  
  card3_btn=createImg("assets/Red_card.png")
  card3_btn.position(500,80);
  card3_btn.size(200,300);
  card3_btn.mouseClicked(card3)
  card4_btn=createImg("assets/Yellow_card.svg.png")
  card4_btn.position(700,80)
  card4_btn.size(200,300)
  card4_btn.mouseClicked(card4)
}

function draw() {
  background(0);
  image(bgImage,0,0)
  //drawSprites();


  }
  function card1(){
    alert("Justice!!! You have Chosen");
    card1_btn=createImg("assets/Justice.jpg");
    card1_btn.position(100,80);
    card1_btn.size(200,300);
  }
  function card2(){
    alert("World!!! You have Chosen");
    card2_btn=createImg("assets/world.jpg");
    card2_btn.position(300,80);
    card2_btn.size(200,300);
  }
function card3(){
  alert("Magician!! You have chosen");
    card3_btn=createImg("assets/magician.jpg");
    card3_btn.position(500,80);
    card3_btn.size(200,300);

}

  function card4(){
    alert("Sun!! You have chosen");
      card4_btn=createImg("assets/RWS_Tarot_19_Sun.jpg" )
      card4_btn.position(700,80);
      card4_btn.size(200,300);
}

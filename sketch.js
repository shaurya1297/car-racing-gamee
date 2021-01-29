var canvas, backgroungimage ;
var playercount =0, database , gamestate = 0
var form, player, game , allplayers;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,trackimg
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30)
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}
function draw(){
    if(playercount===4){
       
        game.update(1)
    }
    if(gamestate==1){
        clear()
        game.play()
    }
    if(gamestate==2){
        game.end()
    }
}

function preload(){
car1img = loadImage("images/car1.png")
car2img = loadImage("images/car2.png")
car3img = loadImage("images/car3.png")
car4img = loadImage("images/car4.png")
trackimg = loadImage("images/track.jpg")






}
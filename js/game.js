class Game{
    constructor(){

    }
getState(){
    var gamestateref = database.ref("gameState")
    gamestateref.on("value",function(data){
        gamestate = data.val()
    })
}
update(state){
    database.ref("/").update({
        gameState:state
    })
}
 async start(){

    
    if(gamestate===0){
        player = new Player()
        var playercountref= await database.ref("playerCount").once("value")
        if(playercountref.exists()){
            playercount = playercountref.val()
            player.getCount()
        }

       
        form = new Form()
        form.display()
        
    }
    car1 = createSprite(100,200)
    car1.addImage(car1img)
    car2 = createSprite(300,200)
    car2.addImage(car2img)
    car3 = createSprite(500,200)
    car3.addImage(car3img)
    car4 = createSprite(700,200)
    car4.addImage(car4img)
    cars = [car1,car2,car3,car4]
}
play(){
    form.hide()
    textSize(30)
    text("game start",120,100)
    Player.getplayerinfo()
    player.getcarsatend()
    if(allplayers!==undefined){
        background("#666060")
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var displayposition = 130
        var index = 0
        var x = 175
        var y 
        for(var plr in allplayers){
           index = index+1
           x = x+200
           y = displayHeight-allplayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y
           if(index===player.index){
               fill("red")
               stroke(10)
               ellipse(x,y,60,60)
           cars[index-1].shapeColor=("red")
           camera.position.x=displayWidth/2
           camera.position.y=cars[index-1].y
           }
           
        }

    }
    if(player.distance>=3860){
        gamestate = (2)
        player.rank+=1;
        
        Player.updatecarsatend(player.rank)
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance +=50
        player.update()
    }
    drawSprites()
}
end(){
    console.log("game ended")
    console.log(player.rank)
}
}

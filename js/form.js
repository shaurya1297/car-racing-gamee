class Form {
    constructor(){
        this.input= createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
this.title = createElement("h2")
this.resetbutton = createButton("restart")
    }
 display(){
     
     this.title.html("car racing game")
     this.title.position(displayWidth/2-50,0)
     this.input.position(displayWidth/2-40,displayHeight/2-80)
     this.button.position(displayWidth/2+30,displayHeight/2)
     this.resetbutton.position(displayWidth-100,20)
     this.button.mousePressed(()=>{
         this.input.hide()
         this.button.hide()
         var name = this.input.value()
         playercount+=1
         player.index= playercount
        
         player.name = name
         player.update()
         player.updatecount(playercount)
         this.greeting.html("Hello"+ player.name)
         this.greeting.position(displayWidth/2-70,displayHeight/4)
     })
     this.resetbutton.mousePressed( ()=>{
         this.resetbutton.hide()
         game.update(0)
         player.updatecount(0)

       })
 }
 hide(){
     this.greeting.hide()
     this.button.hide()
     this.input.hide()
     this.title.hide()
 }
}
class Player{
    constructor(){this.index=null;
        this.distance = 0
        this.name = null
        this.rank = null    }
    getCount(){
        var playercountref = database.ref("playerCount")
        playercountref.on("value",(data)=>{
            playercount = data.val()
        })
    }
    updatecount(count){
        database.ref("/").update({
            playerCount:count
        })
           
      

    }
    getcarsatend(){
        database.ref("CarsAtEnd").on("value",(data)=>{
            this.rank = data.val()
        })
    }
    static updatecarsatend(rank){
database.ref("/").update({
    CarsAtEnd:rank
})
    }
    update(){
        var playerindex="players/player"+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo (){
        var playerinforef = database.ref("players")
        playerinforef.on("value",(data)=>{
            allplayers = data.val()
        })
    }
}
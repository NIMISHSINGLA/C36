class Game{
    constructor(){
        
    }
    getState(){
        var gamestateref = db.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate = data.val();
        });

    }
    updateState(state){
        db.ref('/').update({
            gamestate:state
        });
    }
    start(){
        if( gamestate === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display();
        }
    }
}
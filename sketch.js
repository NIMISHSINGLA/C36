var ball;
var db,playercount=0,gamestate=0,form,game,player;

function setup(){
    createCanvas(500,500);
    db = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}
    
function draw(){
    background("white");
    
}





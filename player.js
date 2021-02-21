class Player{
    constructor(){
        
    }
    getCount(){
        var playercount1ref = db.ref('playercount');
        playercount1ref.on("value",function(data){
            playercount = data.val();
        });

    }
    updateCount(count){
        db.ref('/').update({
            playercount:count
        });
    }
    update(name){
   var playerno = "player"+playercount;
   db.ref(playerno).set({
       Name:name
   });
    }
}
class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car racing game");
        title.position(130,10);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Play");
        button.position(250,220);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playercount+=1;
            player.update(name);
            player.updateCount(playercount);

            var greeting = createElement('h3');
            greeting.html("Hello"+ name);
            greeting.position (130,150);
        })
    }
}
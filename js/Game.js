class Game {
  constructor(){

  }

  /*getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }*/

  async start(){
    if(gameState === 0){
      player = new Player();
      form = new Form()
      form.display();
      }
      

    /*runner1 = createSprite(100,200);
    //car1.addImage("car1",car3_img);

    runner2 = createSprite(300,200);
    //car2.addImage("car2",car3_img);

    runner3 = createSprite(500,200);
    //car3.addImage("car3",car3_img);

    runner4 = createSprite(700,200);
    //car4.addImage("car4",car3_img);

    runners = [runner1, runner2, runner3, runner4];*/
  }

  play(){
    form.hide();
    hurdles = new Hurdles;
    hurdles.spawnHurdles();

    //Player.getPlayerInfo();
    //player.getCarsAtEnd();

    
    /*if(allPlayers !== undefined){
      //var display_position = 100;
      background("#c68767");
      image(track, 0,-displayHeight*4, displayWidth, displayHeight*5);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          runners[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = runners[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }*/

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      //player.update();
    }
     
    if(player.distance>3860){
        gameState = 2;
        player.rank+=1;
        //Player.updateCarsAtEnd(player.rank);
    }

    drawSprites();

  }
  end(){
    console.log("gameEnded");
    console.log(player.rank);
  }
}

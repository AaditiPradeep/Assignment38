class Hurdles {
    constructor(){

    }

    spawnHurdles(){
        if(frameCount%60===0){
            var hurdles = createSprite(600,165,10,40);
            hurdles.addImage(hurdles_img);
        }
    }
    drawSprites();
}
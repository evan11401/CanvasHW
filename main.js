//遊戲地形
//0:可走  1:障礙  2:終點  3:敵人
var c,cxt;

var resultArray=[0,1,1,0,0,0,3,1,2];

var currentImgMainX,currentImgMainY;
var img,imgMain,imgEnemy,x=0;

window.onload = function(){
    c = document.getElementById("myCanvas");
    cxt = c.getContext("2d");
    //障礙
    img = new Image();
    img.src="https://dl.dropboxusercontent.com/u/11373114/images/BirdRPG/material.png";
    img.onload = function(){
        cxt.drawImage(img,32,65,32,32,200,0,200,200);
        cxt.drawImage(img,32,65,32,32,400,0,200,200);
        cxt.drawImage(img,32,65,32,32,200,400,200,200);
    };
    //主角
    imgMain = new Image();
    imgMain.src = "main.gif";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        cxt.drawImage(imgMain,325,283,30,27,currentImgMainX,currentImgMainY,200,200);
    };
    //路人
    imgEnemy = new Image();
    imgEnemy.src="ball.png";
    imgEnemy.onload = function(){
        cxt.drawImage(imgEnemy,37,45,156,140,0,400,200,200);
    };
    window.onkeydown = move;
};
function move(e){
        var targetImgMainX ,targetImgMainY, targetBlock;
        switch(e.keyCode){
            case 40:
                x=x%3;
                console.log("down");
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY+200;
                if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
                    targetBlock = targetImgMainX/200+targetImgMainY/200*3;
                }else{
                    targetBlock=-1;
                }
                cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
                if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3){

                }else{
                    currentImgMainY+=200;
                }
                cxt.drawImage(imgMain,12+32*x,284,30,27,currentImgMainX,currentImgMainY,200,200);
                x++;
                break;
            case 38:
                x=x%3;
                console.log("up");
                targetImgMainX = currentImgMainX;
                targetImgMainY = currentImgMainY-200;
                if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
                    targetBlock = targetImgMainX/200+targetImgMainY/200*3;
                }else{
                    targetBlock=-1;
                }
                cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
                if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3){

                }else{
                    currentImgMainY-=200;
                }
                cxt.drawImage(imgMain,70+30*x,8,30,27,currentImgMainX,currentImgMainY,200,200);
                x++;
                break;
            case 39:
                x=x%3;
                console.log("right");
                targetImgMainX = currentImgMainX+200;
                targetImgMainY = currentImgMainY;
                if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
                    targetBlock = targetImgMainX/200+targetImgMainY/200*3;
                }else{
                    targetBlock=-1;
                }
                cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
                if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3){

                }else{
                    currentImgMainX+=200;
                }
                cxt.drawImage(imgMain,245+32*x,210,32,30,currentImgMainX,currentImgMainY,200,200);
                x++;
                break;
            case 37:
                x=x%3;
                console.log("left");
                targetImgMainX = currentImgMainX-200;
                targetImgMainY = currentImgMainY;
                if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
                    targetBlock = targetImgMainX/200+targetImgMainY/200*3;
                }else{
                    targetBlock=-1;
                }
                cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
                if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3){

                }else{
                    currentImgMainX-=200;
                }
                cxt.drawImage(imgMain,22+32*x,210,30,30,currentImgMainX,currentImgMainY,200,200);
                x++;
                break;
        }
        switch(resultArray[targetBlock]){
            
        }
    }
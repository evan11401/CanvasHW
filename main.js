//遊戲地形
//0:可走  1:障礙  2:終點  3:敵人
var c,cxt;

var resultArray=[0,1,1,0,0,0,3,1,2];

var currentImgMainX,currentImgMainY;
var img,imgMain,imgEnemy,x=0,imgChange,imgball;


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
    imgChange = 0;
    imgStart = 0;
    imgMain = new Image();
    imgMain.src = "small.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        if(imgStart == 0){
            cxt.drawImage(imgMain,32,302,23,27,currentImgMainX,currentImgMainY,200,200);
            imgStart=1;
        }
        if(imgChange==1){
            cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
            cxt.drawImage(imgMain,325,283,30,27,currentImgMainX,currentImgMainY,200,200);
        }
        
    };
    //進化球
    imgball = new Image();
    imgball.src="ball.png";
    imgball.onload = function(){
        cxt.drawImage(imgball,37,45,156,140,0,400,200,200);
    };
    //Boss
    imgEnemy = new Image();
    imgEnemy.src="small.png";
    showEnemy();
    
    window.onkeydown = move;
};
function move(e){
        var targetImgMainX ,targetImgMainY, targetBlock; 
        
        switch(e.keyCode){
            case 40:
                if(imgChange==0){
                    x=x%2;
                    console.log("down");
                    targetImgMainX = currentImgMainX;
                    targetImgMainY = currentImgMainY+200;
                    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
                        targetBlock = targetImgMainX/200+targetImgMainY/200*3;
                    }else{
                        targetBlock=-1;
                    }
                    cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainY+=200;
                    }
                    cxt.drawImage(imgMain,25+18*x,234,18,27,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }else{
                    x=x%2;
                    console.log("down");
                    targetImgMainX = currentImgMainX;
                    targetImgMainY = currentImgMainY+200;
                    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0){
                        targetBlock = targetImgMainX/200+targetImgMainY/200*3;
                    }else{
                        targetBlock=-1;
                    }
                    cxt.clearRect(currentImgMainX ,currentImgMainY ,200 ,200);
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainY+=200;
                    }
                    cxt.drawImage(imgMain,45+32*x,284,30,27,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }
                
            case 38:
                if(imgChange==0){
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
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainY-=200;
                    }
                    cxt.drawImage(imgMain,251+16*x,233,19,27,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }else{
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
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainY-=200;
                    }
                    cxt.drawImage(imgMain,70+30*x,8,30,27,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }
                
            case 39:
                if(imgChange==0){
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
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainX+=200;
                    }
                    
                    cxt.drawImage(imgMain,441+22*x,299,21,28,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    
                    break;
                }else{
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
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainX+=200;
                    }
                    cxt.drawImage(imgMain,245+32*x,210,32,30,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }
                
            case 37:
                if(imgChange==0){
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
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainX-=200;
                    }
                    cxt.drawImage(imgMain,60+20*x,233,22,30,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }else{
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
                    if(targetBlock==-1 || resultArray[targetBlock]==1 || resultArray[targetBlock]==3 || resultArray[targetBlock]==2){

                    }else{
                        currentImgMainX-=200;
                    }
                    cxt.drawImage(imgMain,22+32*x,210,30,30,currentImgMainX,currentImgMainY,200,200);
                    x++;
                    break;
                }
                
        }
        //console.log("targetBlock="+targetBlock);
        //console.log("resultArray[targetBlock]="+resultArray[targetBlock]);
        var a = document.getElementById("talkbox");
        
        switch(resultArray[targetBlock]){
            case undefined:
                a.innerHTML = "<br>邊框";
                break;
            case 3:
                a.innerHTML = "<br>是寶貝球!!";
                if(imgChange==0){
                    if(confirm("是寶貝球!!進化吧!!")){
                        up();
                    }
                }                
                break;
            case 1:
                a.innerHTML = "<br>牆壁...";
                break;
            case 2:
                a.innerHTML = "<br>出現怪物了!!";
                if(imgChange==0){
                    alert("要進化之後才能對抗...去旁邊找找吧!");
                }else{
                    if(confirm("要決一死戰嗎?")){
                        beatMonster();
                    }
                }
            default:
                a.innerHTML = "<br>";
        }
    }
    function up(){
        alert("進化吧!!");
        imgChange = 1;
        imgMain.src = "main.gif";
    }
    var swingWings;
    function showEnemy(){       
        var y=0;              
            swingWings = setInterval(function(){
                y=y%3;
                cxt.clearRect(400 ,400 ,200 ,200);
                cxt.drawImage(imgEnemy,77+y*26,1434,26,28,400,400,200,200);
                y++;
            },500);                      
    }
    var defeatMonster;
    function beatMonster(){
        y=0;
        clearInterval(swingWings);
        defeatMonster = setInterval(function(){
                y=y%3;
                cxt.clearRect(400 ,400 ,200 ,200);
                cxt.drawImage(imgEnemy,181+y*35,1468,34,28,400,400,200,200);
                y++;
            },500);
        alert("任務成功!!");
    };    
let timer=60;
var score=0;
var hitrn=0;
var highScore=0;

function getScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}


function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitInterval").textContent=hitrn;
}

function startTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#pbottom").innerHTML = `<h1 style="color:rgb(161, 147, 64)">GAME OVER!</h1>`;
        }
    },1000);
}

function makeBubble(){
    var cr="";
    for(var i=1;i<=161;i++){
        var rn = Math.floor(Math.random()*10);
        cr += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML=cr;
}

var x = document.querySelector("#pbottom").addEventListener("click",function(detail){
    var num = Number(detail.target.textContent);
    if(num===hitrn){
        getScore();
        getNewHit();
        makeBubble();
    }
})



document.querySelector("#btn").addEventListener("click",function(){
    timer=60;
    makeBubble();
    getNewHit();
})



makeBubble();
startTimer();
getNewHit();


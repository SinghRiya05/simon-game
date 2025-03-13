/*
1=key press->start game
2=>btn flash -- level one
btn press=>check user and game seq
if same=>level up
if not =>game over
*/

let gaemSeq=[];
let userSeq=[];
let Score=[];
let btns=["yellow","red","blue","green"];
let body=document.querySelector("body");
let started=false;
let level=0;
let h2=document.querySelector("h2");
let rstrt=document.querySelector(".restart");
let clk=document.querySelector(".start");

clk.addEventListener("click",function(){
    if(started==false){
        console.log("game start");
        started=true;

        levelUp();
    }
});

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game start");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }

function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;

let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
gaemSeq.push(randColor);
console.log(gaemSeq);
gameFlash(randbtn);
}

function checkAns(idx){
if(userSeq[idx]===gaemSeq[idx]){
    if(userSeq.length==gaemSeq.length){
       setTimeout(levelUp,1000);
    }
}else{
    body.classList.add("over");
    setTimeout(function(){
        body.classList.remove("over");
    },200);
    Score.push(level);
    let hs=Math.max(...Score);
    h2.innerHTML=`Game Over! your score was<b> ${level}</b>. <br>highest score = ${hs}.<br>Press any key or Restart to start . `
  
    reset();
}
}

rstrt.addEventListener("click",function(){
    if(started==false){
        console.log("game start");
        started=true;

        levelUp();
    }
   
});


function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
 userColor=btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn-cont");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gaemSeq=[];
    userSeq=[];
    level=0;
}


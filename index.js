var p1=prompt("Enter player 1");
var p2=prompt("Enter player 2");
document.querySelector("#p1").textContent=p1;
document.querySelector("#p2").textContent=p2;

var dice1=document.querySelectorAll(".dice")[0].querySelectorAll(".spots");
var dice2=document.querySelectorAll(".dice")[1].querySelectorAll(".spots");

function invis(){
    for(var i=0; i<9; i++){
        dice1[i].classList.remove("visible");
        dice2[i].classList.remove("visible");
    }
}

function number(dice_){
    var r = Math.ceil(Math.random()*6);
    if(r==1){
        dice_[4].classList.add("visible");
    }

    else if(r==2){
        dice_[2].classList.add("visible");
        dice_[6].classList.add("visible");
    }

    else if(r==3){
        dice_[2].classList.add("visible");
        dice_[4].classList.add("visible");
        dice_[6].classList.add("visible");
    }

    else if(r==4){
        dice_[0].classList.add("visible");
        dice_[2].classList.add("visible");
        dice_[6].classList.add("visible");
        dice_[8].classList.add("visible");
    }

    else if(r==5){
        dice_[0].classList.add("visible");
        dice_[2].classList.add("visible");
        dice_[4].classList.add("visible");
        dice_[6].classList.add("visible");
        dice_[8].classList.add("visible");
    }

    else if(r==6){
        dice_[0].classList.add("visible");
        dice_[2].classList.add("visible");
        dice_[3].classList.add("visible");
        dice_[5].classList.add("visible");
        dice_[6].classList.add("visible");
        dice_[8].classList.add("visible");
    }
    return r;
}

function roll(){
    invis();
    n1=number(dice1);
    n2=number(dice2);

    if(n1>n2){
        document.querySelector("#score").textContent=p1+" WINS THIS ROUND.";
    }
    else if(n2>n1){
        document.querySelector("#score").textContent=p2+" WINS THIS ROUND.";    
    }
    else{
        document.querySelector("#score").textContent="THIS ROUND WAS A DRAW.";
    }
}
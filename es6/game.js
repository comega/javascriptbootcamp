


var scores = [0,0];

var activeUser = 0;

var score1 = document.getElementById('user-score-0');
var score2 = document.getElementById('user-score-1');
var role = document.getElementById('role');
var holdOn = document.getElementById('hold');
var img = document.getElementById('img');




document.getElementById('role').addEventListener('click',(e)=>{

    var rand = Math.floor( (Math.random() * 6) )+1;
    updateDice(rand);
    // console.log(rand);
    if(rand != 1){

        if(activeUser == 0){
            scores[0]+=rand;
            score1.innerText = scores[0];
        }else{
            scores[1]+=rand;
            score2.innerText = scores[1];
        }

        isWinner();

        console.log(scores);

    }else{
        // userScore = "score";
        // userScore = (activeUser == 0) ? userScore+"0" : userScore +"1";
        // window[userScore].innerText = 0;

        if(activeUser == 0){
            scores[0] = 0;
            score1.innerText = 0;
            
        }else{
            scores[1] = 0;
            score2.innerText = 0;
        }

        reverseActiveUser(activeUser);
    }
    // if(scores[0] >= 30 || scores[1]>=30 ){

    // }

});


holdOn.addEventListener('click',(e)=>{
    reverseActiveUser(activeUser);
});


updateDice = (rand)=>{

    var diceName = "images/Dice-"+rand+".png";
    img.src = diceName;
    role.innerHTML = rand;

};

reverseActiveUser = (active)=>{

    active == 0 ? activeUser=1: activeUser=0;

};

isWinner = ()=>{

    if(scores[0] >= 30 || scores[1]>=30){
        let winner =  ( activeUser == 0 ? 1 : 2);
        console.log( " User number " + winner + " is winner!!!");
    }
}
 



var main = "my main";

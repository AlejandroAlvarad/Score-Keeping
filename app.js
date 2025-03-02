const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

const resetButton = document.querySelector("#reset");

const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

const winningScoreSelect = document.querySelector("#playTo")

let p1S = 0;
let p2S = 0;
let isGameOver = false;
let winningScore = 3;

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1S ++;
        if(p1S === winningScore){
            isGameOver = true;
        }
        p1Score.textContent = p1S;
    }

});

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2S ++;
        if(p2S === winningScore){
            isGameOver = true;
        }
        p2Score.textContent = p2S;
    }
});

resetButton.addEventListener('click', reset);

function reset(){
    p1S = 0;
    p2S = 0;
    p1Score.textContent = p1S;
    p2Score.textContent = p2S;
    isGameOver = false;
}

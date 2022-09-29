document.querySelector("button").addEventListener("click", diceRolling);

function diceRolling() {var player1 = prompt("What's your name?");
var player2 = prompt("What's your opponent's name?");

if(player1.length === 0){
    var playerTrueName1 = "Player 1";
    document.querySelectorAll("p")[0].textContent = playerTrueName1;
}else{
var player1FirstLetter = player1.slice(0,1);
var player1OtherLetters = player1.slice(1,player1.length);
var player1A = player1FirstLetter.toUpperCase();
var player1B = player1OtherLetters.toLowerCase();
var playerTrueName1 = player1A + player1B;
document.querySelectorAll("p")[0].textContent = playerTrueName1;
}

if(player2.length === 0){
    var playerTrueName2 = "Player 2"
    document.querySelectorAll("p")[1].textContent = playerTrueName2;
}else {
var player2FirstLetter = player2.slice(0,1);
var player2OtherLetters = player2.slice(1,player2.length);
var player2A = player2FirstLetter.toUpperCase();
var player2B = player2OtherLetters.toLowerCase();
var playerTrueName2 = player2A + player2B;
document.querySelectorAll("p")[1].textContent = playerTrueName2;
}




var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelectorAll("img")[0];
    if (randomNumber1 === 1){
        image1.setAttribute("src","images/dice1.png");
    } else if (randomNumber1 === 2){
        image1.setAttribute("src","images/dice2.png");
    } else if (randomNumber1 === 3){
        image1.setAttribute("src","images/dice3.png");
    } else if (randomNumber1 === 4){
        image1.setAttribute("src","images/dice4.png");
    } else if (randomNumber1 === 5){
        image1.setAttribute("src","images/dice5.png");
    } else {
        image1.setAttribute("src","images/dice6.png");
    }

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = document.querySelectorAll("img")[1];
    if (randomNumber2 === 1){
        image2.setAttribute("src","images/dice1.png");
    } else if (randomNumber2 === 2){
        image2.setAttribute("src","images/dice2.png");
    } else if (randomNumber2 === 3){
        image2.setAttribute("src","images/dice3.png");
    } else if (randomNumber2 === 4){
        image2.setAttribute("src","images/dice4.png");
    } else if (randomNumber2 === 5){
        image2.setAttribute("src","images/dice5.png");
    } else {
        image2.setAttribute("src","images/dice6.png");
    }


var header = document.querySelector("h1");
var numeroUno = randomNumber1;
var numeroDuex = randomNumber2;



if (numeroUno > numeroDuex){
    var playerTrueName1Str = playerTrueName1 + " Wins!";
    header.textContent = playerTrueName1Str;
} else if (numeroUno === numeroDuex){
    header.textContent = "It's A Draw!";
} else {
    var playerTrueName2Str = playerTrueName2 + " Wins!";
    header.textContent = playerTrueName2Str;
}
}
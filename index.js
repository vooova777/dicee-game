var arr = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]; 
var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

document.querySelector(".dice-game").firstElementChild.firstElementChild.setAttribute("src", arr[randomNumber1]);
document.querySelector(".dice-game").lastElementChild.firstElementChild.setAttribute("src", arr[randomNumber2]);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}
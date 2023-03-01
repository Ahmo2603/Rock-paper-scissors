let rock = 0;
let paper = 1;
let scissors = 2;
let gameArr = [rock, paper, scissors];
let playerNumber = parseInt(prompt("Enter a number from 0 to 2. 0 is rock, 1 is paper and 2 are scissors."));
while (playerNumber > 2 || playerNumber < 0) {
  alert("Enter a number from 0 to 2!");
  playerNumber = parseInt(prompt("Enter a number from 0 to 2. 0 is rock, 1 is paper and 2 are scissors."));
}
let computerNumber = Math.floor(Math.random() * 3);
if (playerNumber == rock) {
  let messageSelectionPlayer = document.createElement("div");
  messageSelectionPlayer.innerHTML = "Rock was selected by the player."
  messageSelectionPlayer.style = "border: 1px solid black; width: 300px; height: 25px; background-color: blue; color: white;"
  document.body.appendChild(messageSelectionPlayer);
} else if (playerNumber == paper) {
  let messageSelectionPlayer = document.createElement("div");
  messageSelectionPlayer.innerHTML = "Paper was selected by the player."
  messageSelectionPlayer.style = "border: 1px solid black; width: 300px; height: 25px; background-color: blue; color: white;"
  document.body.appendChild(messageSelectionPlayer);
} else if (playerNumber == scissors) {
  let messageSelectionPlayer = document.createElement("div");
  messageSelectionPlayer.innerHTML = "Scissors were selected by the player."
  messageSelectionPlayer.style = "border: 1px solid black; width: 300px; height: 25px; background-color: blue; color: white;"
  document.body.appendChild(messageSelectionPlayer);
}
if (computerNumber == rock) {
  let messageSelectionComputer = document.createElement("div");
  messageSelectionComputer.innerHTML = "Rock was selected by the computer."
  messageSelectionComputer.style = "border: 1px solid black; width: 300px; height: 25px; background-color: red;"
  document.body.appendChild(messageSelectionComputer);
} else if (computerNumber == paper) {
  let messageSelectionComputer = document.createElement("div");
  messageSelectionComputer.innerHTML = "Paper was selected by the computer."
  messageSelectionComputer.style = "border: 1px solid black; width: 300px; height: 25px; background-color: red;"
  document.body.appendChild(messageSelectionComputer);
} else if (computerNumber == scissors) {
  let messageSelectionComputer = document.createElement("div");
  messageSelectionComputer.innerHTML = "Scissors were selected by the computer."
  messageSelectionComputer.style = "border: 1px solid black; width: 300px; height: 25px; background-color: red;"
  document.body.appendChild(messageSelectionComputer);
}
if (playerNumber == computerNumber) {
  let result = document.createElement("div");
  result.innerHTML = "It is a tie."
  result.style = "border: 1px solid black; width: 300px; height: 25px; background-color: gray;"
  document.body.appendChild(result);
} else if (computerNumber == 2 && playerNumber == 0) {
  let result = document.createElement("div");
  result.innerHTML = "You win!"
  result.style = "border: 1px solid black; width: 300px; height: 25px; background: linear-gradient(135deg, blue, blue 75%, red 75%, red); color: white;"
  document.body.appendChild(result);
} else if (playerNumber == 2 && computerNumber == 0) {
  let result = document.createElement("div");
  result.innerHTML = "You lose!"
  result.style = "border: 1px solid black; width: 300px; height: 25px; background: linear-gradient(135deg, red, red 75%, blue 75%, blue);"
  document.body.appendChild(result);
} else if (playerNumber > computerNumber) {
  let result = document.createElement("div");
  result.innerHTML = "You win!"
  result.style = "border: 1px solid black; width: 300px; height: 25px; background: linear-gradient(135deg, blue, blue 75%, red 75%, red); color: white;"
  document.body.appendChild(result);
} else if (playerNumber < computerNumber) {
  let result = document.createElement("div");
  result.innerHTML = "You lose!"
  result.style = "border: 1px solid black; width: 300px; height: 25px; background: linear-gradient(135deg, red, red 75%, blue 75%, blue);"
  document.body.appendChild(result);
}
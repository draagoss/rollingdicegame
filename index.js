// Manipulate Player 1
var playerOneName = prompt("Player 1 name:");
var playerOneNameFirstLetter = playerOneName.slice(0, 1).toUpperCase();
var playerOneNameRestLetters = playerOneName.slice(1, playerOneName.length).toLowerCase();
playerOneName = playerOneNameFirstLetter + playerOneNameRestLetters;

// Manipulate Player 2
var playerTwoName = prompt("Player 2 name:");
var playerTwoNameFirstLetter = playerTwoName.slice(0, 1).toUpperCase();
var playerTwoNameRestLetters = playerTwoName.slice(1, playerTwoName.length).toLowerCase();
playerTwoName = playerTwoNameFirstLetter + playerTwoNameRestLetters;

// Set the names
document.querySelector(".player1").textContent = playerOneName;
document.querySelector(".player2").textContent = playerTwoName;

// Score Board Manipulation
var score1 = 0;
var score2 = 0;
document.querySelector(".scoreBoard").textContent = playerOneName + " " + score1 + " - " + score2 + " " + playerTwoName


// Space button to play
document.addEventListener("keydown", function (event) {
    playGame(event.code);
});

//  Click to play
document.querySelector("button").addEventListener("click", function () {
    playGame("Space");
});

// The play system
function playGame(key) {
    var randomNumber1 = Math.random() * 6 + 1;
    randomNumber1 = Math.floor(randomNumber1);

    var randomNumber2 = Math.random() * 6 + 1;
    randomNumber2 = Math.floor(randomNumber2);


    switch (key) {
        case "Space":
            // Rolling animation
            document.querySelector(".img1").setAttribute("src", "./images/rolling.gif");
            document.querySelector(".img2").setAttribute("src", "./images/rolling.gif");

            // Show the result

            setTimeout(function () {
                document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
                document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

                if (randomNumber1 > randomNumber2) {
                    document.querySelector("h1").textContent = playerOneName + " wins! 🎉";
                } else if (randomNumber1 < randomNumber2) {
                    document.querySelector("h1").textContent = playerTwoName + " wins! 🎉";
                } else if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").textContent = "Draw! 😔";
                }
            }, 1000)


            break;

        default: console.log("Press SPACE to play");
    }

    // Score Board
    setTimeout(function(){
        if (randomNumber1 > randomNumber2) {
            score1++;
            document.querySelector(".scoreBoard").textContent = playerOneName + " " + score1 + " - " + score2 + " " + playerTwoName;            // console.log("Score: " + playerOneName + " " + score1 + " - " + score2 + " " + playerTwoName);
        } else if (randomNumber1 < randomNumber2) {
            score2++;
            document.querySelector(".scoreBoard").textContent = playerOneName + " " + score1 + " - " + score2 + " " + playerTwoName;
        } else if (randomNumber1 === randomNumber2) {
            score1 += 0;
            score2 += 0;
            document.querySelector(".scoreBoard").textContent = playerOneName + " " + score1 + " - " + score2 + " " + playerTwoName
        }
    }, 1150);

}
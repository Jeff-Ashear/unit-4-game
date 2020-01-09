//Establishes win and loss counter variables, sets them to 0, and displays them in the appropriate field:
var wins = 0
$("#wins").text(wins);
var losses = 0
$("#losses").text(losses);

// computer generates random number between 19 and 120
var bottomRange = 19
var topRange = 120

var randomNumber = randomRange(bottomRange, topRange);

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("random number: " + randomNumber);

//show the random number and the starting user number

var userNumber = 0;
console.log("user number: " + userNumber);
$("#showRandomNumber").text(randomNumber);
$("#showUserNumber").text(userNumber);

// computer generates a random number for each crystal between 1 and 12. 
//these numbers remain invisisble

var buttonBottom = 1
var buttonTop = 12
var buttonTopOdd = 5

var blueCrystalNumber = blueCrystalRange(buttonBottom, buttonTop);

function blueCrystalRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("Blue: " + blueCrystalNumber);

var purpleCrystalNumber = purpleCrystalRange(buttonBottom, buttonTopOdd);

function purpleCrystalRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
purpleCrystalNumber = purpleCrystalNumber * 2 + 1;

console.log("Purple: " + purpleCrystalNumber);

var rainbowCrystalNumber = rainbowCrystalRange(buttonBottom, buttonTop);

function rainbowCrystalRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("Rainbow: " + rainbowCrystalNumber);

var clearCrystalNumber = clearCrystalRange(buttonBottom, buttonTop);

function clearCrystalRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("Clear: " + clearCrystalNumber);

// wire up buttons to add user input to the userNumber variable and check win conditions.

$("#blueCrystal").click(function() {
    userNumber += blueCrystalNumber;
    $("#showUserNumber").text(userNumber);
    console.log("userNumber: " + userNumber);
    winConditions();
})

$("#purpleCrystal").click(function() {
    //use this code in final draft:
    // userNumber += purpleCrystalNumber;

    //below is code to test loss conditions easily
    userNumber = randomNumber + 1
    
    $("#showUserNumber").text(userNumber);
    console.log("userNumber: " + userNumber);
    winConditions();
})

$("#rainbowCrystal").click(function() {
    userNumber += rainbowCrystalNumber;
    $("#showUserNumber").text(userNumber);
    console.log("userNumber: " + userNumber);
    winConditions()
})

$("#clearCrystal").click(function() {
    //use this code in the final draft:
    // userNumber += clearCrystalNumber;


    //below is code to test win conditions easily
    userNumber = randomNumber;

    $("#showUserNumber").text(userNumber);
    console.log("userNumber: " + userNumber);
    winConditions();

})


//testing the buttons
console.log("user number: " + userNumber);

//setting up win conditions and a game loop
function winConditions() {
    
    if (userNumber === randomNumber) {
        console.log("You Win!!");
        console.log("wins: " + wins);
        var againW = confirm("You win! Try again?");
            if (againW == true) {
                wins = wins + 1;
                $("#wins").text(wins);
                userNumber = 0
                $("#showUserNumber").text(userNumber);
                randomNumber = randomRange(bottomRange, topRange);
                randomRange();
                $("#showRandomNumber").text(randomNumber);
                console.log("random number: " +randomNumber)

            } else {
                wins = 0
                $("#wins").text(wins);
                losses = 0
                $("#losses").text(losses);
                userNumber = 0
                $("#showUserNumber").text(userNumber);
                //fix call to randomRange Function
                randomNumber = randomRange(bottomRange, topRange);
                randomRange();
                $("#showRandomNumber").text(randomNumber);
                console.log("random number: " + randomNumber)
            }

    } else {
        if (userNumber > randomNumber) {
            console.log("You Lose!!");
            console.log("losses: " + losses);
            var againL = confirm("You loose! Try again?");
            if (againL == true) {
                losses = losses + 1;
                $("#losses").text(losses);
                userNumber = 0
                $("#showUserNumber").text(userNumber);
                randomNumber = randomRange(bottomRange, topRange);
                randomRange();
                $("#showRandomNumber").text(randomNumber);
                console.log("random number: " + randomNumber)
            }else {
                wins = 0
                $("#wins").text(wins);
                losses = 0
                $("#losses").text(losses);
                userNumber = 0
                $("#showUserNumber").text(userNumber);
                randomNumber = randomRange(bottomRange, topRange);
                randomRange();
                $("#showRandomNumber").text(randomNumber);
                console.log("random number: " + randomNumber)
            }
            
        }
    }
};

//each time a button is clicked, a check is performed to see if the number matches or
// exceeds the random number

//if the numbers are equal the user gets a message and the wins are updated

//if the user number exceeds the random number, the user gets a message and the losses
// are updated
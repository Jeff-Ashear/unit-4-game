// computer generates random number between 19 and 120
var bottomRange = 19
var topRange = 120

var randomNumber = randomRange(bottomRange, topRange);

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);

//show the random number and the starting user number

var userNumber = 0;
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
})

$("#purpleCrystal").click(function() {
    userNumber += purpleCrystalNumber;
    $("#showUserNumber").text(userNumber);
})

$("#rainbowCrystal").click(function() {
    userNumber += rainbowCrystalNumber;
    $("#showUserNumber").text(userNumber);
})

$("#clearCrystal").click(function() {
    //use this code in the final draft: userNumber += clearCrystalNumber;


    //below is code to test win conditions easily
    userNumber += randomNumber;

    $("#showUserNumber").text(userNumber);

})


// function winConditions {
//     if (userNumber = randomNumber) {
//         prompt("You Win!")
//     }
// };

//each time a button is clicked, a check is performed to see if the number matches or
// exceeds the random number

//if the numbers are equal the user gets a message and the wins are updated

//if the user number exceeds the random number, the user gets a message and the losses
// are updated
// computer generates random number between 19 and 120
var bottomRange = 19
var topRange = 120

var randomNumber = randomRange(bottomRange, topRange);

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);

//show the random number

$("#showRandomNumber").text(randomNumber);

// computer generates a random number for each crystal between 1 and 12. 
//these numbers remain invisisble

// wire up buttons

// when the user clicks a button, its value is added to the total

//each time a button is clicked, a check is performed to see if the number matches or
// exceeds the random number

//if the numbers are equal the user gets a message and the wins are updated

//if the user number exceeds the random number, the user gets a message and the losses
// are updated
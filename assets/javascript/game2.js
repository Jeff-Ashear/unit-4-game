//variables for random number generation within a range of 19-120:
var randomBottom = 19
var randomTop = 120

//variable to store the random number:
var randomTotal = theRange(randomBottom, randomTop);

//function creates the random number, then it is displayed:
function theRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("Random Number: " + randomTotal);
$("#showRandomNumber").text(randomTotal);

//variables to define the range of the crystals' values:
var bottomButton = 1;
var topButton = 12;

//an array of numbers from which the crystal values are chosen:

var possibleCrystalValues = val[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];

console.log(possibleCrystalValues[3]);
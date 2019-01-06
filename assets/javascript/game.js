$(document).ready(function() {

// INITIAL CREATION OF VARIABLES
// ==============================================================================

// Set up crystal variables to have an empty starting value
var Crystal1 = [];
var Crystal2 = [];
var Crystal3 = [];
var Crystal4 = [];

var vals = [1,2,3,4,5,6,7,8,9,10,11,12]

// Set win and loss variables to an initial value of 0
var wins = 0;
var losses = 0;

// Set variable to keep track of score
var score = 0;

// Use a for loop to populate the list of possible target numbers with the values between 19 and 120
// Set an empty array for the target number for each game round 
var targetnumlist = [];
var low = 19;
var high = 120;

var targetnum = [];

        // Fill targetnum with integers 19 - 120
        for (var i = low; i <= high; i++) {
            targetnumlist.push(i);
        }

// Set Crystal Values
    var Crystal1 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal1);

    var Crystal2 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal2);

    var Crystal3 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal3);

    var Crystal4 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal4);

// Build reset function
var Reset = function() {
    score = 0;
    $("#currscore").text(score);
    targetnum =  targetnum = targetnumlist[Math.floor(Math.random()*targetnumlist.length)];
    $("#number").text("The Number To Match: " + targetnum);
    Crystal1 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal1);
    Crystal2 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal2);
    Crystal3 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal3);
    Crystal4 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal4);
}

// Build Win Function
var Winfun = function(){
console.log("you win");
wins = wins + 1;
$("#wins").text("Wins: " + wins);
Reset();
}

// Build Lose Function
 var Lossfun = function(){
 console.log("you lose :(")
    score = 0;
    losses = losses + 1;
    console.log(losses);
    $("#losses").text("Losses: " + losses);
    Reset();
 }

// Select a target number for this round
targetnum = targetnumlist[Math.floor(Math.random()*targetnumlist.length)];

// Display the value of "targetnum" as the number to match to win the game
$("#number").text("The Number To Match: " + targetnum);

// Set up actions for when crystal buttons are clicked
// Add new value to score
// Check to se if game won or lost

$("#crystal1").click(function(){
score = score + Crystal1;
console.log(score);
$("#currscore").text(score);
if (score == targetnum) {
    Winfun();
} else if (score < targetnum) {
    console.log("keep guessing")
} else if (score > targetnum) {
    Lossfun();
}
}
)

$("#crystal2").click(function(){
    score = score + Crystal2;
    console.log(score);
    $("#currscore").text(score);
    if (score == targetnum) {
        Winfun();
    } else if (score < targetnum) {
        console.log("keep guessing")
    } else if (score > targetnum) {
        Lossfun();
    }
}
)

$("#crystal3").click(function(){
    score = score + Crystal3;
    console.log(score);
    $("#currscore").text(score);
    if (score == targetnum) {
        Winfun();
    } else if (score < targetnum) {
        console.log("keep guessing")
    } else if (score > targetnum) {
        Lossfun();
    }
}
)

$("#crystal4").click(function(){
    score = score + Crystal4;
    console.log(score);
    $("#currscore").text(score);
    if (score == targetnum) {
        Winfun();
    } else if (score < targetnum) {
        console.log("keep guessing")
    } else if (score > targetnum) {
        Lossfun();
    }
}
)




// CLOSE DOCUMENT READY FUNCTION
});
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
            console.log(targetnumlist);

// Set Crystal Values
var Crystal1 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal1);

    var Crystal2 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal2);

    var Crystal3 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal3);

    var Crystal4 = vals[Math.floor(Math.random()*vals.length)];
    console.log(Crystal4);

// Select a target number for this round
targetnum = targetnumlist[Math.floor(Math.random()*targetnumlist.length)];
console.log(targetnum);

document.getElementById("randnum").innerHTML = "Your Number Is";

// CLOSE DOCUMENT READY FUNCTION
});
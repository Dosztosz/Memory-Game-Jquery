var cards = ["ciri.png", "geralt.png", "iorweth.png", "jaskier.png", "tris.png", "yen.png", "ciri.png", "geralt.png", "iorweth.png", "jaskier.png", "tris.png", "yen.png"]


// Getting all elements to be a variable
var c0 = document.getElementById("c0")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")
var c5 = document.getElementById("c5")
var c6 = document.getElementById("c6")
var c7 = document.getElementById("c7")
var c8 = document.getElementById("c8")
var c9 = document.getElementById("c9")
var c10 = document.getElementById("c10")
var c11 = document.getElementById("c11")


// Listening Click for variable. After Click the revealCard function is played
c0.addEventListener('click', function() {revealCard(0)})
c1.addEventListener('click', function() {revealCard(1)})
c2.addEventListener('click', function() {revealCard(2)})
c3.addEventListener('click', function() {revealCard(3)})
c4.addEventListener('click', function() {revealCard(4)})
c5.addEventListener('click', function() {revealCard(5)})
c6.addEventListener('click', function() {revealCard(6)})
c7.addEventListener('click', function() {revealCard(7)})
c8.addEventListener('click', function() {revealCard(8)})
c9.addEventListener('click', function() {revealCard(9)})
c10.addEventListener('click', function() {revealCard(10)})
c11.addEventListener('click', function() {revealCard(11)})

// Checking if one of the card is visible (starts at false)
var oneVisible = false; 
// Variable of the Number of counters (stars at 0)
var turnCounter = 0;

var visible_nr;
// Variable if the card should be visible (locked)
var lock = false;
// Starting number of pairs
var pairsLeft = 6;

function revealCard(nr){
    console.log(nr);

    var opacityValue = $('#'+nr).css('opacity');

    if(opacityValue != 0 && lock == false){
        lock = true;
        var obraz = "url("+cards[nr]+")";

        $("#"+nr).css('background-image', obraz);
    }

}
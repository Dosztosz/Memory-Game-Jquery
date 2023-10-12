var cards = ["pikachu.png", "snorlax.png", "squirtle.png", "mimikyu.png", "charmander.png", "bulbasaur.png", "pikachu.png", "snorlax.png", "squirtle.png", "mimikyu.png", "charmander.png", "bulbasaur.png"]


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


c0.addEventListener('click', function(){showCard(0)})
c1.addEventListener('click', function(){showCard(1)})
c2.addEventListener('click', function(){showCard(2)})
c3.addEventListener('click', function(){showCard(3)})
c4.addEventListener('click', function(){showCard(4)})
c5.addEventListener('click', function(){showCard(5)})
c6.addEventListener('click', function(){showCard(6)})
c7.addEventListener('click', function(){showCard(7)})
c8.addEventListener('click', function(){showCard(8)})
c9.addEventListener('click', function(){showCard(9)})
c10.addEventListener('click', function(){showCard(10)})
c11.addEventListener('click', function(){showCard(11)})

// Lock variable that will lock clicking another cards while loading
var lock = false;
// variable for card visibility
var visibleCard = false;
var anotherCardNr = 0;
var isAnotherCard = false;
var leftPairs = 6;
var moves = 0;


function showCard(nr){

    currentCard = $('#c'+nr)

    currentCardOpacity = currentCard.css('opacity')
    var obraz = "url(img/"+cards[nr]+")"

    if(currentCardOpacity != 0 && lock == false){
        lock = true;

        currentCard.css('background-image', obraz)
        currentCard.addClass('cardActive')
        currentCard.removeClass('card')

        if(isAnotherCard == true){

            if(cards[anotherCardNr] == cards[nr]){
                setTimeout(function(){pointCards(anotherCardNr, nr)}, 600)
            }
            else{
                setTimeout(function(){restoreCards(anotherCardNr, nr)}, 600)
            }
            moves++
            $('.score').html("Turn counter: "+moves)

        }
        else{
            anotherCardNr = nr;
            isAnotherCard = true;
            lock = false;
            
        }
    }

}

function pointCards(nr1, nr2){
    $('#c'+nr1).animate({opacity:0});
    $('#c'+nr1).removeClass('cardActive')
    $('#c'+nr1).addClass('card')

    $('#c'+nr2).animate({opacity:0});
    $('#c'+nr2).removeClass('cardActive')
    $('#c'+nr2).addClass('card')
    isAnotherCard = false

    lock = false;
    leftPairs--

    if(leftPairs == 0){
        $('.board').html("<h1>Wygrałeś</h1>")
    }

}

function restoreCards(nr1, nr2){
    console.log("para")
    $('#c'+nr1).removeAttr('style')
    $('#c'+nr1).removeClass('cardActive')
    $('#c'+nr1).addClass('card')

    $('#c'+nr2).removeAttr('style')
    $('#c'+nr2).removeClass('cardActive')
    $('#c'+nr2).addClass('card')
    isAnotherCard = false
    lock = false;

}
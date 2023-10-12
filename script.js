var cards = ["pikachu.png", "charmander.png", "mimikyu.png", "snorlax.png", "gyarados.png", "bulbasaur.png", "pikachu.png", "charmander.png", "mimikyu.png", "snorlax.png", "gyarados.png", "bulbasaur.png"];

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");


c0.addEventListener('click', function(){showCard(0)});
c1.addEventListener('click', function(){showCard(1)});
c2.addEventListener('click', function(){showCard(2)});
c3.addEventListener('click', function(){showCard(3)});
c4.addEventListener('click', function(){showCard(4)});
c5.addEventListener('click', function(){showCard(5)});
c6.addEventListener('click', function(){showCard(6)});
c7.addEventListener('click', function(){showCard(7)});
c8.addEventListener('click', function(){showCard(8)});
c9.addEventListener('click', function(){showCard(9)});
c10.addEventListener('click', function(){showCard(10)});
c11.addEventListener('click', function(){showCard(11)});

var cardCounter = 0;
var pairNumber = 6;
var oneVisible = false;
var isVisible = false;
var visibleNr = 0;
var lock = false;


function showCard(nr){

    var opacityValue = $('#c'+nr).css('opacity');

    if (opacityValue != 0 && lock == false){
        // Locking Clicking random cards
        lock = true;
        var obraz = "url(img/" + cards[nr] + ")";
        $("#c"+nr).css('background-image', obraz);
        $('#c'+nr).addClass('cardActive');
        $('#c'+nr).removeClass('card');

        if(oneVisible == false){

            //information that card is visible
            oneVisible = true;
            //Generating number of visible card for next draw
            visibleNr = nr;
            //Unlocking clicking cards
            lock = false;
        }

        else{
            if(cards[visibleNr] == cards[nr]){
                // Getting Pair
                setTimeout(function(){removePair(visibleNr, nr)}, 550)
            }
            else{
                // Not getting Pair
                setTimeout(function(){restoreTwoCards(visibleNr, nr)}, 1000)
            }
            cardCounter ++
            oneVisible = false;
            $('.score').html('Turn counter: ' + cardCounter);
        }
    }
}

function removePair(nr1, nr2){
    //Turning opacity of cards to 0 to not break a flex
    $('#c'+nr1).css('opacity', '0');
    $('#c'+nr2).css('opacity', '0');

    //Reducing Pair numbers until 0
    pairNumber --
    if(pairNumber == 0){
        $('.board').html("<h1>Wygrałaś/eś</h1>")
    }
    //unlocking clicking again
    lock = false;

}


function restoreTwoCards(nr1, nr2){
    //Restoring cards to be hidden Again Should be doubled becouse of 2 cards
    $("#c"+nr1).css('background-image', "url(img/karta.png)");
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardActive');

    $("#c"+nr2).css('background-image', "url(img/karta.png)");
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardActive');
    //unlocking clicking again
    lock = false;
}
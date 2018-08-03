var quotes = [
    ['For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move', 'img/1.jpg'],
    ['Adventure is worthwhile', 'img/2.jpg'],
    ['Traveling – it leaves you speechless, then turns you into a storyteller', 'img/3.jpg'],
    ['We travel, some of us forever, to seek other places, other lives, other souls', 'img/4.jpg'],
    ['A journey is best measured in friends, rather than miles', 'img/5.jpg'],
    ['The gladdest moment in human life, me thinks, is a departure into unknown lands', 'img/6.jpg'],
    ['No place is ever as bad as they tell you it’s going to be', 'img/7.jpg']
    ['I am not the same, having seen the moon shine on the other side of the world', 'img/8.jpg'],
    ['Travel makes one modest. You see what a tiny place you occupy in the world', 'img/9.jpg'],
    ['We travel not to escape life, but for life not to escape us', 'img/10.jpg']
];

var mainButton = document.querySelector('button');

function clickRandom() {
    mainButton.addEventListener('click', function() {
        var randomResult = Math.floor(Math.random() * quotes.length);
        var randomQuotes = quotes[randomResult][0];
        var img = quotes[randomResult][1];
        document.getElementById('quoteResult').innerHTML = randomQuotes;
        document.body.style.backgroundImage = "url(" + img + ")";
    });
}

clickRandom();

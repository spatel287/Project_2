var rand = 0;
var word = " ";
var wordlength = 0;
var spaces = 0;
var numRight = 0;
var mistake = 7;
var nextImg = 1;
var divWidth = 55;
var sound = new Audio();

var food1 = ["Pizza", "Pasta", "Chicken", "Rice", "lasagna", "Noodels"];
var movies = ["The Godfather","The Wizard of Oz","Citizen Kane","The Shawshank Redemption","Pulp Fiction","Star Wars","Jaws","Toy Story","Titanic"];
var games2 = ["Fortnite", "Halo", "Chess", "Monopooly", "Minecraft", "Super Mario"];
var morefood1 = ["Apple", "Apricot", "Banana", "Blackberry", "Cherry", "Coconut", "Cucumber", "Date", "Grape", "Guava", "Lemon", "Lime", "Mango", "Kiwi", "Melon", "Orange", "Papaya", "Peach", "Pear", "Plum", "Pineapple", "Olive", "Tomato", "Pumpkin", "Watermelon", "Grapes", "Carrot", "Corn", "Eggplant", "Pepper", "Red Pepper", "Grenn Pepper", "Mushrooms", "Onion", "Potato", "peas", "raddish", "Cabbage", "Rosemary", "Bean"];

function category()
{
    sound.src = "click.mp3";
    sound.play();
    document.getElementById('firstpg').style.display = "none";
    document.getElementById('categorypg').style.display = "block";
}
function create()
{
    sound.src = "click.mp3";
    sound.play();
    document.getElementById('firstpg').style.display = "none";
    document.getElementById('createpg').style.display = "block";
}
function food()
{
    sound.src = "click.mp3";
    sound.play();
    rand = Math.floor(Math.random()*food1.length);
    word = food1[rand];
    document.getElementById('categorypg').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Food Names";
    hangman();
}
function movie()
{
    rand = Math.floor(Math.random() * movies.length);
    word = movies[rand];
    document.getElementById('categorypg').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Movie Names";
    hangman();
}
function games()
{
    sound.src = "click.mp3";
    sound.play();
    rand = Math.floor(Math.random() * games2.length);
    word = games2[rand];
    document.getElementById('categorypg').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Games";
    hangman();
}
function morefood() {
    sound.src = "click.mp3";
    sound.play();
    rand = Math.floor(Math.random() * morefood1.length);
    word = morefood1[rand];
    document.getElementById('categorypg').style.display = "none";
    document.getElementById('categoryName').innerHTML = "More Food";
    hangman();
}
function hangman()
{
    var x = word.length;
    var y = x - 1;
    divWidth = divWidth * word.length + 10 ;
    document.getElementById('wordWrap').style.width = divWidth + "px";
    while(x>0)
    {
        var letter = word.substring(y, x);
        if(letter  === " ")
        {
            document.getElementById('letter' + x).innerHTML = "&nbsp;";
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        }
        else
        {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('underline' + x).style.display = "block";
            document.getElementById('underline' + x).style.borderBottom = "3px solid black";
          
        }

        x--;
        y--;

    }
    wordlength = word.length - spaces;

    
    document.getElementById('categorypg').style.display = "none";
    document.getElementById('gamepg').style.display = "block";
    document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
}

function guessLetter()
{
    sound.src = "keyhitter.mp3";
    sound.play();

    var target = event.target;
    var correct=false;
    target.style.visibility = "hidden";

    var lower = target.id;
    var upper = document.getElementById(lower).getAttribute('value');

    for(var a=1;a<=100;a++)
    {
        if(document.getElementById('letter'+a).innerHTML===lower || document.getElementById('letter'+a).innerHTML===upper)
        {
            document.getElementById('letter' + a).style.visibility = "visible";
            correct = true;
            numRight++;
        }

    }

    if (correct == false)
    {
        mistake--;
        ++nextImg;
        document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
        document.getElementById('hangImg').src = 'hang'+ nextImg +'.png';
    }
    if (mistake <= 0)
    {
        mistake = 0;
        document.getElementById('winner').innerHTML = 'You lose!!!';
        lose();
    }
    if(numRight==wordlength)
    {
        document.getElementById('winner').innerHTML = "You Win";
        win();
    }
}
function countChars(countFrom,displayTo)
{
    var len = document.getElementById(countFrom).value.length;
    document.getElementById(displayTo).innerHTML = len;
}


function readText()
{
    word = document.getElementById('input').value;
    document.getElementById('createpg').style.display = "none";
    document.getElementById('categoryName').innerHTML = 'Guess the word';
    hangman();
}
function win()
{
    sound.src = "win.mp3";
    sound.play();
    document.getElementById('gamepg').style.display = "none";
    document.getElementById('finalpg').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;
    
}
function lose() {
    sound.src = "lose.mp3";
    sound.play();
    document.getElementById('gamepg').style.display = "none";
    document.getElementById('finalpg').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;

}

function playAgain()
{
    sound.src = "click.mp3";
    sound.play();
    document.location.reload(true);
    document.getElementById('finalpg').style.display = "none";
    hangman();
}
function mainMenu()
{
    sound.src = "click.mp3";
    sound.play();
    document.location.reload(true);
    document.getElementById('finalpg').style.display = "none";
    document.getElementById('firstpg').style.display = "block";
}

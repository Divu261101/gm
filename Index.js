var randomNumber = Math.floor(Math.random() * 6) + 1;

var image1 = "Dice" + randomNumber + ".jpeg";
var image1source = "Photos/" + image1;
document.querySelectorAll("img")[0].setAttribute("src", image1source);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var image2 = "Dice"+randomNumber2+".jpeg";
var image2source = "Photos/"+image2;
document.querySelectorAll("img")[1].setAttribute("src", image2source);

//Predicting Winner
if(randomNumber<randomNumber2)
{
  document.querySelector('h1').innerHTML = "🥇Player 2 Wins🥇";
}
else if (randomNumber>randomNumber2)
{
  document.querySelector('h1').innerHTML = "🥇Player 1 Wins🥇"
}
else
{
  document.querySelector('h1').innerHTML = "DRAW";
}

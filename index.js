var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimages = "dice" + randomnumber1 + ".png";
var randomsourceimages = "images/" + randomdiceimages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsourceimages);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimages2 = "dice" + randomnumber2 + ".png";
var randomsourceimages2 = "images/" + randomdiceimages2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsourceimages2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "👌👌player1 win";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "👌👌player2 win";
}
 else {
  document.querySelector("h1").innerHTML = "😜😜😜draw!";
}

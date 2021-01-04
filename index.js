var firstNumber = Math.floor(Math.random()*6)+1;
var diceName1 = "images/dice"+firstNumber+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceName1);


var secondNumber = Math.floor(Math.random()*6)+1;
var diceName1 = "images/dice"+secondNumber+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceName1);

if(firstNumber>secondNumber){
  var Result = document.getElementById("heading");
  Result.innerHTML="Player 1 is the Winner!!";
}else if(secondNumber>firstNumber){
  var Result = document.getElementById("heading");
  Result.innerHTML="Player 2 is the Winner!!";
}else{
  var Result = document.getElementById("heading");
  Result.innerHTML="Its a tie Refesh again"; 
}

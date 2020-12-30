var css = document.querySelector("h3"); //selecting h3 which will display the code for the colors
var color1 = document.querySelector(".color1"); //".color1" since you are selecting class="color1"
var color2 = document.querySelector(".color2"); //samedt
var body = document.getElementById("gradient"); //this will be the var so that the bg gradient will be selected
var random = document.getElementById("random"); //this will be the var for the random button

function randomColor(){ //the addition of '000000' and the slice() at the end will ensure that you'll always get 6digits
	return ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
}

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.textContent = body.style.background + ";"; 
}

function randomGradient(){ //same as setGradient() but we are using the random hex generator -- randomColor()
	body.style.background = 
	"linear-gradient(to right, "
		+ '#' + randomColor()
		+ ", "
		+ '#' + randomColor()
		+ ")";
	css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);

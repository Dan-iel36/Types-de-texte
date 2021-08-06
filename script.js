let numberToFind = 4; 
var data = document.getElementById("cool"); 
let rep = document.getElementById("rep"); 
let numberOfTries = 1; 
let fUp = document.getElementById("followUp");
let ess = document.getElementById("ess");
let mem = document.getElementById("mem");
let pre = document.getElementById("pre");
let rom = document.getElementById("rom");
let sub = document.getElementById("sub");

function changeBackground(color) {
	rep.style.background = color;
	//rep.style.border = "4px palegreen hashed";
}

function show() {
	fUp.style.display = "block";
	fUp.style.visibility = "visible";
}

document.addEventListener("submit", function(event) { 
event.preventDefault(); 
let userInput = document.getElementById("num"). value 
	; 



if (userInput == numberToFind) { 
		rep.innerHTML = "<p > Bravo, vous avez trouvé en "
		 + numberOfTries + " essais. </p>"; 
		 changeBackground('khaki');
		 show();


} else if (userInput <numberToFind) { 
    	writeOnPage('C\'est plus') 
    	numberOfTries ++; 
    	changeBackground('khaki');
    	


} else { 
    	writeOnPage('C\'est moins') 
    	numberOfTries ++; 
    	changeBackground('khaki');

}; 
}); 

function writeOnPage(string) { 
  	rep.innerHTML = "<p>" + string + "</p>" 
  	//changeBackground('khaki');

};	

/*function wrongUn(color) {
	ess.style.background = 'red';
}

let form = document.getElementsByTagName("form");


window.addEventListener("Submit", function(event) {
	event.preventDefault();
	let data1 = document.getElementById("ess").value;

	if (data1 == ESSAI) {
		wrongUn();
	}
})*/
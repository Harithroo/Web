function increaseFontSize() {
  docElement = document.getElementById('whole');
  style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
  currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 1) + 'px';
  
}

function decreaseFontSize() {
  docElement = document.getElementById('whole');
  style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
  currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 1) + 'px';
  
}




function addFunction (n) {
if (sessionStorage.cost>=0){
prompt
if (confirm ("add item : Rs "+n)){
sessionStorage.cost = Number(sessionStorage.cost) + n;
}
}else{
sessionStorage.cost=0
}
}

function validateForm() {
	var x = document.forms["details"]["name"].value;
	var y = document.forms["details"]["address"].value;
	var z = document.forms["details"]["contact"].value;
	if (x == "") {
		alert("Name must be filled out");
		return false;
	}else if (y == "") {
		alert("Address must be filled out");
		return false;
	}else if (z == "") {
		alert("Contact must be filled out");
		return false;
	}else if (sessionStorage.cost == null) {
		alert("You have to select items from the above category");
		return false;
	}else{
	alert("Your bill is :RS "+sessionStorage.cost);
	}
}

function validateFeed() {
	var a = document.forms["feed"]["fname"].value;
	var b = document.forms["feed"]["comments"].value;
	var c = document.forms["feed"]["select"].value;
	if (a == "") {
		alert("Name must be filled out");
		return false;
	}else if (b == "") {
		alert("comments must be filled out");
		return false;
	}else if (c == "") {
		alert("select must be filled out");
		return false;
	}else{
	alert("Dear " + a +", Thankyou for your feedback. you have rated our site as " + c + " and your comment was " + b);
	}
}
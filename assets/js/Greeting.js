var greeting;
var time = new Date().getHours();

if (time > 17) {
	greeting = "Good Evening!";
}

else if (time > 11) {
	greeting = "Good Afternoon!";
}

else if (time > 0) {
	greeting = "Good Morning!";
}

else {
	greeting = "Welcome!";
}

var elWelcome = document.getElementById("welcome");
elWelcome.textContent = greeting;

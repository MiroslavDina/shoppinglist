var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}


button.addEventListener("click", function() {
	// console.log("click is working");
	// console.log(input.value);
	if (inputLength() > 0) {
		createListElement();
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(input.value));
		// ul.appendChild(li);
		// input.value = "";
	}
})

input.addEventListener("keypress", function(event) {
	// console.log("event");
	// console.log(input.value);
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(input.value));
		// ul.appendChild(li);
		// input.value = "";
	}
})
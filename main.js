
// JS File for ica6
// Krishanu Datta and Zain Alam
// Last moditifed: 02.07.2023


// Event Handler for click

function submitClicked() {

	let vals = document.getElementsByTagName("input");

	for (let i = 0; i < vals.length; i++) {

		if(vals[i].checked) {
			let newText = "Selected Vis: " + vals[i].value;
			document.getElementById("selected-vis").innerHTML = newText;
		}
	}
}

document.getElementById("subButton")
		.addEventListener('click', submitClicked);

function toggleLineColor() {
  var element = document.getElementById("line");
  element.classList.toggle("line2");
}






















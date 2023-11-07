// var width = 16;
// var height = 16;

Sketching(16, 16);

function Sketching(width, height) {
	const container = document.getElementById("container");
	const cells = [];
	const rows = [];
	const sizeText = document.getElementById("gridSize");

	sizeText.textContent = `${width} x ${height}`;

	for (let i = 0; i < width; i++) {
		rows[i] = document.createElement("div");
		rows[i].setAttribute("class", "gridColumn");
		container.appendChild(rows[i]);
		for (let j = 0; j < height; j++) {
			cells[j] = document.createElement("div");
			cells[j].setAttribute("class", "gridCell");
			rows[i].appendChild(cells[j]);
		}
	}

	const squares = document.querySelectorAll(".gridCell");

	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			square.style.backgroundColor = "black";
		});
	});
}

function SetSize() {
	let newHeight = prompt("Please enter the height of your canvas.");
	let newWidth = prompt("PLease enter the width of your canvas.");

	

	Sketching(newWidth, newHeight);
}


function Sketching() {
	const container = document.getElementById("container");
	const cells = [];
	const rows = [];

	for (let i = 0; i < 16; i++) {
		rows[i] = document.createElement("div");
		rows[i].setAttribute("class", "gridColumn");
		container.appendChild(rows[i]);
		for (let j = 0; j < 16; j++) {
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


Sketching();
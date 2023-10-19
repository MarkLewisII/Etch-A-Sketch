function MakeBoard() {
	const container = document.getElementById("container");

	for (let i = 0; i < 16; i++) {
		const cell = document.createElement("div");
		cell.setAttribute("class", "gridSquare");
		for (let j = 0; j < 16; j++) {
			const rows = document.createElement("div");
			rows.setAttribute("class", "gridRow");
			rows.appendChild(cell);
			container.appendChild(rows);
			// container.appendChild(cell);
		}
	}
}

MakeBoard();

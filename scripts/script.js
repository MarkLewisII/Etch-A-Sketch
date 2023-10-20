const container = document.getElementById("container");
const cell = document.createElement("div");

cell.className = "gridSquare";

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		var row = document.createElement("div");
		row.className = "gridRow";
		row.appendChild(cell);
	}
}
container.appendChild(row);

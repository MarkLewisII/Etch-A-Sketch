var defualtSize = 16;

// Sketching(16, 16);
Sketching();

function Sketching(size = 16) {
	const container = document.getElementById("container");
	const containerHeight = container.offsetHeight;
	const containerWidth = container.offsetWidth;
	const cells = [];
	const columns = [];
	const sizeText = document.getElementById("gridSize");
	// const sizeBtn = document.getElementById("sizeBtn");
	var cellHeight = (size / containerHeight) * 100;
	var cellWidth = (size / containerWidth) * 100;

	
	cellHeight = cellHeight + "%";
	cellWidth = cellWidth + "%";

	var columnWidth = (size / containerWidth) * 100;
	columnWidth = columnWidth + "%";

	console.log(containerWidth + "x" + containerHeight);
	console.log(columnWidth);

	if (size <= 100) {
		for (let i = 0; i < size; i++) {
			columns[i] = document.createElement("div");
			columns[i].setAttribute("class", "gridColumn");
			container.appendChild(columns[i]);
			for (let j = 0; j < size; j++) {
				cells[j] = document.createElement("div");
				cells[j].setAttribute("class", "gridCell");
				
				columns[i].appendChild(cells[j]);
			}
		}

		const squares = document.querySelectorAll(".gridCell");

		squares.forEach((square) => {
			square.style.height = cellHeight;
			square.style.width = cellWidth;
			square.addEventListener("mouseover", () => {
				square.style.backgroundColor = "black";
			});
		});

		sizeText.textContent = `${size} x ${size}`;
	} else {
		alert("Please ensure that grid size is no more than 100.");
	}
}

function ClearBoard(container) {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

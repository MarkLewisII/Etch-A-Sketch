// var defualtSize = 16;

// Sketching(16, 16);
Sketching();

function Sketching(size = 16) {
	const container = document.getElementById("container");
	// const containerHeight = container.offsetHeight;
	const containerSide = container.offsetHeight;
	// const containerWidth = container.offsetWidth;
	const cells = [];
	const columns = [];
	const sizeText = document.getElementById("gridSize");
	// var cellWidth = (size / containerWidth) * 100 * size;
	// var cellHeight = (size / containerHeight) * 100 * size;
	var cellSide = containerSide / size;

	cellSide = cellSide + "px";
	// cellHeight = cellHeight + "px";

	// cellWidth = cellWidth + "px";

	var columnWidth = containerSide / size;
	// var columnWidth = (size / containerWidth) * 100 * size;

	// columnWidth = columnWidth + "%";
	columnWidth = columnWidth + "px";

	// console.log(containerWidth + "x" + containerHeight);
	// console.log(columnWidth);
	// console.log(cellHeight);
	// console.log(cellWidth);
	console.log(containerSide + "x" + containerSide);
	console.log(columnWidth);
	console.log(cellSide);

	if (size <= 100) {
		for (let i = 0; i < size; i++) {
			columns[i] = document.createElement("div");
			columns[i].setAttribute("class", "gridColumn");
			// columns[i].style.width = columnWidth;
			columns[i].style.width = columnWidth;
			// columns[i].style.height = containerSide;
			container.appendChild(columns[i]);
			for (let j = 0; j < size; j++) {
				cells[j] = document.createElement("div");
				cells[j].setAttribute("class", "gridCell");

				columns[i].appendChild(cells[j]);
			}
		}

		const squares = document.querySelectorAll(".gridCell");

		squares.forEach((square) => {
			// square.style.height = cellHeight;
			// square.style.width = cellWidth;
			square.style.height = cellSide;
			square.style.width = cellSide;
			square.addEventListener("mouseover", () => {
				square.style.backgroundColor = "black";
			});
		});

		sizeText.textContent = `${size} x ${size}`;
	} else {
		alert("Please ensure that grid size is no more than 100.");
		Sketching();
	}
}

function ClearBoard(container) {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

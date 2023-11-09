Sketching();

function Sketching(size = 16) {
	const container = document.getElementById("container");
	const containerSide = container.offsetHeight;
	const cells = [];
	const columns = [];
	const sizeText = document.getElementById("gridSize");
	var cellSide = containerSide / size;
	var columnWidth = containerSide / size;

	cellSide = cellSide + "px";
	columnWidth = columnWidth + "px";

	if (size <= 100) {
		for (let i = 0; i < size; i++) {
			columns[i] = document.createElement("div");
			columns[i].setAttribute("class", "gridColumn");
			columns[i].style.width = columnWidth;
			container.appendChild(columns[i]);
			for (let j = 0; j < size; j++) {
				cells[j] = document.createElement("div");
				cells[j].setAttribute("class", "gridCell");

				columns[i].appendChild(cells[j]);
			}
		}

		const squares = document.querySelectorAll(".gridCell");

		squares.forEach((square) => {
			square.style.height = cellSide;
			square.style.width = cellSide;
			square.addEventListener("mouseover", () => {
				square.style.backgroundColor = "black";
				square.style.opacity -= "-0.1";
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

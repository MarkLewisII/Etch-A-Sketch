function MakeBoard() {
    const container = document.getElementById("container");
    const cell = document.createElement("div");

    cell.setAttribute("class", "gridSquare");
    cell.textContent = "test";
    
    for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        container.setAttribute("class", "gridSquare");
        }
    }
}
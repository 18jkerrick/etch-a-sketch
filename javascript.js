function setUpGrid() {
  const container = document.createElement("div");
  container.classList.add("container");
  const body = document.querySelector("body");
  body.appendChild(container);
  const btn = document.querySelector("button");
  btn.addEventListener("click", resetGrid);
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseenter", function (e) {
      this.classList.add("hover");
    });
    square.classList.add("square");
    container.appendChild(square);
  }
}

function resetGrid() {
  const numOfSquares = prompt("How many squares per side? (Max of 100)");
  let gridColumns = "";
  for (let j = 0; j < numOfSquares; j++) {
    gridColumns += "auto ";
  }
  const oldContainer = document.querySelector(".container");
  oldContainer.remove();
  const container = document.createElement("div");
  container.style.gridTemplateColumns = gridColumns;
  container.classList.add("container");
  const body = document.querySelector("body");
  body.appendChild(container);
  for (let i = 0; i < numOfSquares ** 2; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseenter", function (e) {
      this.classList.add("hover");
    });
    square.classList.add("square");
    container.appendChild(square);
  }
}

setUpGrid();

const squareContainer = document.querySelector(".container");
const editBtn = document.querySelector(".editGridBtn");

let grid = 0;

function makeGrid(grid) {
  squareContainer.innerHTML = "";
  for (let i = 0; i < grid ** 2; i++) {
    const squareGrid = document.createElement("div");
    squareGrid.classList.add("grid");
    squareGrid.setAttribute("id", i + 1);
    squareContainer.appendChild(squareGrid);
    squareGrid.style.width = `calc(100% / ${grid})`;
    squareGrid.style.height = `calc(100% / ${grid})`;
    squareGrid.addEventListener("mouseenter", () => {
      squareGrid.style.backgroundColor = "black";
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  editBtn.addEventListener("click", () => {
    grid = Number(prompt("Enter how many grid you want ! ", 16));
    if (grid > 100) {
      makeGrid(100);
      return;
    }
    makeGrid(grid);
  });
});

makeGrid(16);

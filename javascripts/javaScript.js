const squareContainer = document.querySelector(".container");
const editBtn = document.querySelector(".editGridBtn");

let grid = 0;
document.addEventListener("DOMContentLoaded", function () {
  editBtn.addEventListener("click", () => {
    grid = Number(prompt("Enter how many grid you want ! ", 16)) ** 2;  
  });
});

for (let i = 0; i < 256; i++) {
  const squareGrid = document.createElement("div");
  squareGrid.classList.add("grid");
  squareGrid.setAttribute("id", i + 1);
  squareContainer.appendChild(squareGrid);
  squareGrid.addEventListener("mouseenter", () => {
    squareGrid.style.backgroundColor = "black";
  });
}

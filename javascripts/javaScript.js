const squareContainer = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const squareGrid = document.createElement("div");
    squareGrid.classList.add("grid");
  squareGrid.setAttribute("id", i+1)
  squareContainer.appendChild(squareGrid);
  
}

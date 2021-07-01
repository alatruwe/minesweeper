document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10;
  let squares = [];

  // create board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      // create square
      const square = document.createElement("div");
      // set an id
      square.setAttribute("id", i);
      // add it to grid
      grid.appendChild(square);
      //
      squares.push(square);
    }
  }

  createBoard();
});

const container = document.querySelector('.container');
const changeSize = document.querySelector('.changeSize');
const newWindow = document.querySelector('.newWindow');
const range = document.querySelector('.range');
const value = document.querySelector('.rangeOutput');

function popUp() {
  newWindow.style.display = 'flex';
}

changeSize.addEventListener('click', popUp);

let howMany = 16;
let color = 'blue';

function getColor(event) {
    color = event.target.value;
  newWindow.style.display = 'none';
}

let buttonColor = document.querySelectorAll('.buttonColor');
buttonColor.forEach((button) => {
  button.addEventListener('click', getColor);
});

function createBoard(howMany) {
  container.innerHTML = '';

  const containerSize = 800;
  const divSize = containerSize / howMany;

  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  for (let i = 0; i < howMany; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let j = 0; j < howMany; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${divSize}px`;
      cell.style.height = `${divSize}px`;
      row.appendChild(cell);
    }
  }

  let cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', changeColor);
  });
}

function changeColor(event) {
    if (color === 'rainbow') {
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      event.target.style.background = randomColor;
    } else {
      event.target.style.background = color;
    }
  }

createBoard(howMany);

range.addEventListener('input', function () {
  howMany = range.value;
  value.textContent = howMany;
  createBoard(howMany);
});

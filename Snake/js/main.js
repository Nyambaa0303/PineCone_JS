const positions = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
];
const area = document.getElementById("area");
let direction = "right";
let btnUp = document.getElementById('bntUp');
let btnDown = document.getElementById('bntDown');
let btnRight = document.getElementById('bntRight');
let btnLeft = document.getElementById('bntLeft');

document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowDown':
     changeDirection('down');
      break;
    case 'ArrowUp':
      changeDirection('up');
      break;
    case 'ArrowLeft':
      changeDirection('left');
      break;
    case 'ArrowRight':
      changeDirection('right');
      break;
  }
})

function changeDirection(value) {
  if (direction === 'up' || direction === 'down') {
    if (value === 'right' || value === 'left') {
      direction = value;
    }
  }else if(direction === 'right' || direction === 'left'){
    if(value === 'up' || value === 'down') {
      direction = value;
    }
  }
}
function goLeft() {

  const newPositions = [];
  newPositions.push({
    y: positions[0].y,
    x: positions[0].x === 0 ? 9 : positions[0].x - 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}

function goRight() {

  const newPositions = [];
  newPositions.push({
    y: positions[0].y,
    x: positions[0].x === 9 ? 0 : positions[0].x + 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}

function goUp() {

  const newPositions = [];
  newPositions.push({
    x: positions[0].x,
    y: positions[0].y === 0 ? 9 : positions[0].y - 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}

function goDown() {

  const newPositions = [];
  newPositions.push({
    x: positions[0].x,
    y: positions[0].y === 9 ? 0 : positions[0].y + 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}
setInterval(() => {
  switch (direction) {
    case "right":
      goRight();
      break;
    case "left":
      goLeft();
      break;
    case "up":
      goUp();
      break;
    case "down":
      goDown();
      break;
  }
  const snakeBodyHtml = positions
    .map(
      (position) =>
        `<div class = "position" style="
        top: ${position.y * 20}px;
              left: ${position.x * 20}px"></div>`
    )
    .join("");
  area.innerHTML = snakeBodyHtml;
}, 200);

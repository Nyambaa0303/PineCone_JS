const positions = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
];
const newPositions = [];
const area = document.getElementById("area");
let direction = "right";

function goLeft() {
  newPositions.push({
    y: positions[0].y,
    x: positions[0].x === 0 ? 29 : positions[0].x - 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}

function goRight() {
  newPositions.push({
    y: positions[0].y,
    x: positions[0].x === 29 ? 0 : positions[0].x + 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}

function goUp() {
  newPositions.push({
    x: positions[0].x,
    y: positions[0].y === 0 ? 29 : positions[0].x - 1,
  });

  for (let i = 0; i < positions.length - 1; i++) {
    newPositions.push(positions[i]);
  }
  positions = newPositions;
}

function goDown() {
  newPositions.push({
    x: positions[0].x,
    y: positions[0].y === 29 ? 0 : positions[0].x + 1,
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

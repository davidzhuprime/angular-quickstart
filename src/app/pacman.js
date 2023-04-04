const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up Pac-Man parameters
const pacmanRadius = 30;
const pacmanMouth = 0.2;
let pacmanAngle = 0;
let pacmanDirection = 1;

// Draw Pac-Man
function drawPacman() {
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, pacmanRadius, pacmanAngle + pacmanMouth * Math.PI, pacmanAngle - pacmanMouth * Math.PI, false);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.closePath();
  ctx.fill();
}

// Animate Pac-Man
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update Pac-Man's angle
  pacmanAngle += pacmanDirection * 0.05;
  if (pacmanAngle > 2 * Math.PI) {
    pacmanAngle -= 2 * Math.PI;
  } else if (pacmanAngle < 0) {
    pacmanAngle += 2 * Math.PI;
  }

  // Draw Pac-Man
  drawPacman();

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();

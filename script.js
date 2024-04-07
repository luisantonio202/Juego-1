const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

function moveBall() {
  x += dx;
  y += dy;
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

  if (x + ball.offsetWidth >= paddle.offsetLeft && 
      y + ball.offsetHeight >= paddle.offsetTop &&
      y <= paddle.offsetTop + paddle.offsetHeight) {
    dx = -dx;
  }

  if (x < 0 || x + ball.offsetWidth > 600) {
    dx = -dx;
  }

  if (y < 0 || y + ball.offsetHeight > 400) {
    dy = -dy;
  }

  requestAnimationFrame(moveBall);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    paddle.style.top = (paddle.offsetTop - 10) + 'px';
  } else if (event.key === 'ArrowDown') {
    paddle.style.top = (paddle.offsetTop + 10) + 'px';
  }
});

moveBall();

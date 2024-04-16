const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
   // Calculate the percentage position of the mouse cursor relative to the window
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // Update the position and transform of each ball
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

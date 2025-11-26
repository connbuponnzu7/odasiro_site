document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('animationend', () => {
    overlay.style.display = 'none';
  });
});



window.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('click.mp3');
  document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', () => {
      audio.play();
    });
  });
});

const wordBox = document.querySelector('.dh-vocab');
const imageBox = document.querySelector('.dh-image');

new ResizeObserver(() => {
  const height = wordBox.getBoundingClientRect().height;
  if (height > 0) imageBox.style.setProperty('--card-word-height', `${height}px`);
}).observe(wordBox);

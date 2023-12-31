/*
Lazy load images
*/
(() => {
  const lazyImages = document.getElementsByClassName('lazy');
  [...lazyImages].forEach((elem) => {
    const originalImage = elem.dataset.src;

    elem.setAttribute('src', originalImage);
    elem.removeAttribute('data-src');
  });
})();

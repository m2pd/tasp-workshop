


/*
Lazy load images
*/

const lazyImages = document.getElementsByClassName('lazy');

document.addEventListener(
  'DOMContentLoaded',
  () => {
    [...lazyImages].forEach((elem) => {
      const originalImage = elem.dataset.src;

      elem.setAttribute('src', originalImage);
      elem.removeAttribute('data-src');
    });
  },
  false
);

/*
Dark mode
*/
const isDarkMode = () =>
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDarkMode()) {
  document.documentElement.classList.add('dark');
  document.querySelector('.text-toggle').textContent = 'Dark Mode';
} else {
  document.documentElement.classList.remove('dark');
}

function darkModeListener() {
  // document.querySelector('html').classList.toggle('dark');
  if (isDarkMode()) {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.querySelector('.text-toggle').textContent = 'Light Mode';
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.querySelector('.text-toggle').textContent = 'Dark Mode';
  }
}

document
  .querySelector("input[type='checkbox']#dark-toggle")
  .addEventListener('click', darkModeListener);


/*
Hide header on scroll down & show on scroll up
*/

function headerOnScroll() {
  const header = document.querySelector('#header');
  let lastPos = document.documentElement.scrollTop;

  const currPos = document.documentElement.scrollTop;

  if (currPos > lastPos) {
    if (currPos > header.offsetHeight) {
      header.classList.add('-translate-y-full');
      header.classList.remove('shadow-md');
    }
  } else {
    header.classList.remove('-translate-y-full');
    header.classList.add('shadow-md');
  }

  lastPos = currPos;
}

window.addEventListener(
  'scroll',
  () => {
    headerOnScroll();
  },
  false
);
/*
Toggle the menu when pressed on hamburger button
Only on mobile devices
*/

const menu = document.getElementById('menu');
const searchBox = document.getElementById('search');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener(
  'click',
  () => {
    menu.classList.toggle('hidden');
    searchBox.classList.toggle('hidden');
  },
  false
);
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

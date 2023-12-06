/*
Toggle the menu when pressed on hamburger button
Only on mobile devices
*/
(() => {
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
})();

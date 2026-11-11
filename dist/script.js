/* Navigation bar JavaScript */

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('sticky-top', window.scrollY);
});
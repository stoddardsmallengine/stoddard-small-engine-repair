const menu = document.querySelector('.menu');
const nav = document.querySelector('#site-nav');
if (menu) menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#site-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

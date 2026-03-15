/* ============================================
   NITE BY LIS — Colecciones
   js/colecciones.js
   ============================================ */

/* ---------- Nav — siempre opaco (página interna) ---------- */
const nav = document.querySelector('body > nav');
if (nav) {
  nav.style.background           = 'rgba(8,8,8,0.95)';
  nav.style.backdropFilter       = 'blur(10px)';
  nav.style.webkitBackdropFilter = 'blur(10px)';
}

/* ---------- Scroll Reveal ---------- */
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ---------- Filter ---------- */
const btns  = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.col-grid .product-card');

function applyFilter(f) {
  btns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === f);
  });
  cards.forEach(card => {
    const cats = card.dataset.cat ? card.dataset.cat.split(' ') : [];
    const match = f === 'all' || cats.includes(f);
    card.classList.toggle('hidden', !match);
  });
}

btns.forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

/* ---------- URL param auto-filter ---------- */
const params = new URLSearchParams(window.location.search);
const initialFilter = params.get('filter');
if (initialFilter) {
  applyFilter(initialFilter);
}   
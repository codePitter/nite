/* ============================================
   NITE BY LIS — Editorial Dark
   js/main.js
   ============================================ */

/* ---------- Nav — scroll blur gradual / siempre opaco en páginas internas ---------- */
const nav = document.querySelector('body > nav');

if (nav) {
  if (document.body.classList.contains('page-inner')) {
    // Páginas internas: nav siempre opaco, forzado via JS
    nav.style.background           = 'rgba(8,8,8,0.95)';
    nav.style.backdropFilter       = 'blur(10px)';
    nav.style.webkitBackdropFilter = 'blur(10px)';
  } else {
    // Index: nav gradual según scroll. En mobile siempre mínimo visible.
    function updateNav() {
      const isMobile = window.innerWidth <= 768;
      const ratio    = Math.min(window.scrollY / 300, 1);
      const minAlpha = isMobile ? 0.92 : 0;          // mobile: siempre opaco
      const alpha    = Math.max(0.82 * ratio, minAlpha);
      const blur     = isMobile ? 10 : (10 * ratio);

      nav.style.background           = `rgba(8,8,8,${alpha.toFixed(3)})`;
      nav.style.backdropFilter       = `blur(${blur.toFixed(1)}px)`;
      nav.style.webkitBackdropFilter = `blur(${blur.toFixed(1)}px)`;
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav, { passive: true });
    updateNav();
  }
}

/* ---------- Hamburger menu ---------- */
const hamburger = document.getElementById('navHamburger');
const navDrawer  = document.getElementById('navDrawer');

if (hamburger && navDrawer) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navDrawer.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    navDrawer.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navDrawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      navDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}


const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


/* ---------- Hero Video — click para pausar / reanudar ---------- */
const videoWrap = document.getElementById('heroVideoWrap');
const video     = document.getElementById('heroVideo');
const iconPause = document.getElementById('iconPause');
const iconPlay  = document.getElementById('iconPlay');

if (videoWrap && video) {
  videoWrap.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      videoWrap.classList.remove('is-paused');
      iconPause.style.display = '';
      iconPlay.style.display  = 'none';
    } else {
      video.pause();
      videoWrap.classList.add('is-paused');
      iconPause.style.display = 'none';
      iconPlay.style.display  = '';
    }
  });
}
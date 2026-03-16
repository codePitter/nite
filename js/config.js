const NBL_CONFIG = {
  whatsapp: '5493413374674',
};

/* ---------- Construye todos los links wa.me estáticos de la página ---------- */
(function buildWALinks() {
  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
    const url  = new URL(link.href);
    const text = url.searchParams.get('text') || '';
    link.href  = `https://wa.me/${NBL_CONFIG.whatsapp}?text=${text}`;
  });
})();

/* ---------- Construye links WA dinámicos desde data-ref (index) ---------- */
(function buildDynamicWALinks() {
  document.querySelectorAll('a.wa-link[data-ref]').forEach(link => {
    const ref  = link.dataset.ref;
    const name = link.dataset.name || '';
    const text = encodeURIComponent(
      `Hola! Me interesa consultar por: ${name} (Ref: ${ref}) ✦`
    );
    link.href   = `https://wa.me/${NBL_CONFIG.whatsapp}?text=${text}`;
    link.target = '_blank';
    link.rel    = 'noopener';
    link.removeAttribute('data-ref');
    link.removeAttribute('data-name');
  });
})();

/* ---------- Construye links WA dinámicos desde data-id del card padre (colecciones) ---------- */
(function buildCardWALinks() {
  document.querySelectorAll('a.wa-link[href="#"]').forEach(link => {
    const card = link.closest('[data-id]');
    if (!card) return;
    const ref  = card.dataset.id;
    const name = (card.querySelector('.product-name') || {}).textContent || '';
    const text = encodeURIComponent(
      `Hola! Me interesa consultar por: ${name.trim()} (Ref: ${ref}) ✦`
    );
    link.href   = `https://wa.me/${NBL_CONFIG.whatsapp}?text=${text}`;
    link.target = '_blank';
    link.rel    = 'noopener';
    // Limpia el data-id del DOM para no exponer el código
    card.removeAttribute('data-id');
  });
})();
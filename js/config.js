    /* ============================================
   NITE BY LIS — Configuración global
   js/config.js

   ► Para cambiar el número de WhatsApp,
     modificá SOLO esta línea:
============================================ */

const NBL_CONFIG = {
  whatsapp: '5493413374674',
};

/* ---------- Construye todos los links wa.me de la página ---------- */
(function buildWALinks() {
  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
    const url      = new URL(link.href);
    const text     = url.searchParams.get('text') || '';
    link.href      = `https://wa.me/${NBL_CONFIG.whatsapp}?text=${text}`;
  });
})();
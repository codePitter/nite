/* ============================================
   NITE BY LIS — Tienda [MOCKUP]
   js/tienda.js
   ============================================ */

/* ---------- Scroll reveal ---------- */
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ---------- Filters ---------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const shopCards  = document.querySelectorAll('.shop-card');

function applyShopFilter(f) {
  filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  shopCards.forEach(card => {
    const cats = card.dataset.cat ? card.dataset.cat.split(' ') : [];
    card.classList.toggle('hidden', f !== 'all' && !cats.includes(f));
  });
}

filterBtns.forEach(btn => btn.addEventListener('click', () => applyShopFilter(btn.dataset.filter)));

const urlFilter = new URLSearchParams(window.location.search).get('filter');
if (urlFilter) applyShopFilter(urlFilter);

/* ---------- Cart state ---------- */
const cart = [];   // { id, name, img }

const cartDrawer  = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle  = document.getElementById('cartToggle');
const cartClose   = document.getElementById('cartClose');
const cartItems   = document.getElementById('cartItems');
const cartCount   = document.getElementById('cartCount');
const cartTotal   = document.getElementById('cartTotal');
const btnWaChk    = document.getElementById('btnWaCheckout');

function openCart()  {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* ---------- Render cart ---------- */
function renderCart() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío.</p>';
    cartTotal.textContent = 'A confirmar';
    btnWaChk.href = '#';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="img/${getImgForId(item.id)}" alt="${item.name}">
      <div class="cart-item-info">
        <p class="cart-item-id">${item.id}</p>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">Precio a confirmar</p>
      </div>
      <button class="cart-item-remove" data-remove="${item.id}" aria-label="Quitar">✕</button>
    </div>
  `).join('');

  // Build WA checkout message
  const itemsList = cart.map(i => `- ${i.name} (${i.id})`).join('%0A');
  const msg = `Hola%21%20Quiero%20comprar%20los%20siguientes%20productos%20de%20NITE%20BY%20LIS%3A%0A${itemsList}`;
  btnWaChk.href = `https://wa.me/5493410000000?text=${msg}`;

  cartTotal.textContent = 'A confirmar';

  // Remove buttons
  cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = cart.findIndex(i => i.id === btn.dataset.remove);
      if (idx !== -1) cart.splice(idx, 1);
      renderCart();
    });
  });
}

/* Map product IDs to image filenames */
const idToImg = {
  'NBL-TOP-MESH-001':  '1.jpg',
  'NBL-TOP-MESH-002':  '2.jpg',
  'NBL-TOP-CHN-001':   '3.jpg',
  'NBL-SKT-CHN-001':   '4.jpg',
  'NBL-TOP-CHRYS-001': '5.jpg',
  'NBL-TOP-CHRYS-002': '6.jpg',
  'NBL-TOP-CHRYS-003': '7.jpg',
  'NBL-TOP-CHRYSB-001':'8.jpg',
  'NBL-TOP-MIRB-001':  '9.jpg',
  'NBL-TOP-CHRYSB-002':'10.jpg',
  'NBL-TOP-MIR-001':   '11.jpg',
  'NBL-TOP-MIR-002':   '12.jpg',
  'NBL-SET-MESH-001':  '13.jpg',
  'NBL-TOP-CHN-002':   '14.jpg',
};

function getImgForId(id) {
  return idToImg[id] || '1.jpg';
}

/* ---------- Add to cart buttons ---------- */
document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const id   = btn.dataset.id;
    const name = btn.dataset.name;

    if (cart.find(i => i.id === id)) {
      // Already in cart — flash feedback
      btn.textContent = '✓ Agregado';
      setTimeout(() => { btn.textContent = '+ Agregar'; }, 1400);
      openCart();
      return;
    }

    cart.push({ id, name });
    renderCart();
    btn.textContent = '✓ En carrito';
    setTimeout(() => { btn.textContent = '+ Agregar'; }, 1400);
    openCart();
  });
});
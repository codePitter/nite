# NITE BY LIS

Sitio web oficial de **NITE BY LIS** — indumentaria y accesorios artesanales de cadenas, cristales y mallas metálicas. Hecho a mano en Rosario, Argentina.

---

## Estructura del proyecto

```
nite-by-lis/
│
├── index.html              # Home
├── colecciones.html        # Catálogo completo con filtros
├── info.html               # Sobre mí · Envíos · Preguntas frecuentes
├── tienda.html             # [MOCKUP] Tienda con carrito y MercadoPago
├── catalogo-ref.html       # Referencia interna de productos (no publicar)
├── robots.txt              # SEO — excluye tienda.html
├── sitemap.xml             # SEO — index, colecciones, info
├── favicon.svg             # Ícono ✦ en cuadrado negro
│
├── css/
│   ├── styles.css          # Base global (variables, nav, hero, footer…)
│   ├── colecciones.css     # Estilos específicos de colecciones
│   ├── info.css            # Estilos específicos de info
│   └── tienda.css          # Estilos específicos de tienda [MOCKUP]
│
├── js/
│   ├── config.js           # ► Configuración global + constructores de links WA
│   ├── main.js             # Scroll reveal · Nav blur · Hero video · Hamburger
│   ├── colecciones.js      # Filtros · URL params · Scroll reveal
│   ├── info.js             # FAQ accordion · Smooth scroll
│   └── tienda.js           # Carrito · Filtros · Checkout WA [MOCKUP]
│
├── img/
│   └── 1.jpg – 14.jpg      # Fotos de productos
│
├── vid/
│   └── hero2.mp4           # Video del hero
│
├── .gitignore
├── README.md
└── MASTER.md               # Documentación técnica completa
```

---

## Páginas

| Página | Estado |
|---|---|
| `index.html` | ✅ Activa |
| `colecciones.html` | ✅ Activa |
| `info.html` | ✅ Activa |
| `tienda.html` | 🚧 Mockup (oculta del nav) |

---

## Configuración rápida

### Cambiar número de WhatsApp
Abrir `js/config.js` y modificar **una sola línea**:

```js
const NBL_CONFIG = {
  whatsapp: '5493413374674',  // ← acá
};
```

`config.js` construye automáticamente todos los links WA al cargar — tanto los estáticos del footer como los dinámicos de cada producto. Los códigos de referencia nunca quedan expuestos en el HTML.

### Agregar un producto nuevo
1. Agregar imagen en `img/` (ej: `15.jpg`)
2. En `colecciones.html` — agregar card con `data-id` y `class="btn-wa wa-link"`:
```html
<div class="product-card reveal" data-cat="tops" data-id="NBL-TOP-XXX-001">
  <div class="product-img">
    <img loading="lazy" src="img/15.jpg" alt="Nombre del producto">
  </div>
  <div class="product-overlay">
    <p class="product-id">NBL-TOP-XXX-001</p>
    <p class="product-name">Nombre del producto</p>
    <p class="product-price">Consultar precio al MD</p>
    <a class="btn-wa wa-link" href="#">Consultar por WhatsApp</a>
  </div>
</div>
```
3. En `tienda.js` agregar el mapeo: `'NBL-TOP-XXX-001': '15.jpg'`
4. Actualizar el contador en `colecciones.html`: `<p class="col-count">14</p>`

### Activar la Tienda
1. Descomentar en el `<nav>` de todos los HTML: `<!-- <li><a href="tienda.html">Tienda</a></li> -->`
2. Definir precios reales en `tienda.html` (`data-price` en cada `.shop-card`)
3. Integrar MercadoPago SDK
4. Desactivar `.dev-banner` en `tienda.css`
5. Quitar `Disallow: /tienda.html` de `robots.txt` y agregar al `sitemap.xml`

### Deploy en Netlify
1. Conectar el repo de GitHub en Netlify
2. No configurar nada en Build Settings (sitio estático puro)
3. **Importante:** desactivar la ofuscación de emails: _Site settings → Build & deploy → Post processing → Asset optimization → desactivar "Obfuscate email addresses"_

---

## IDs de producto

Formato: `NBL-[TIPO]-[MATERIAL]-[NRO]`

| Sigla | Significado |
|---|---|
| `TOP` | Top / bralette |
| `SKT` | Falda (skirt) |
| `SET` | Conjunto |
| `MESH` | Malla metálica |
| `CHN` | Cadenas |
| `CHRYS` | Cristales transparentes |
| `CHRYSB` | Cristales negros |
| `MIR` | Espejos plateados |
| `MIRB` | Espejos negros |

**Catálogo actual (img/ → ID):**

| img | ID | Nombre | Categoría |
|---|---|---|---|
| 1.jpg | NBL-SET-MESH-001 | Conjunto Malla Metálica | conjuntos · nuevo |
| 2.jpg | NBL-TOP-CHN-002 | Top Cadenas y Cristales | tops |
| 3.jpg | NBL-TOP-MESH-001 | Cota de Malla Triangular | tops · nuevo |
| 4.jpg | NBL-TOP-MESH-002 | Cota de Malla V-Neck | tops |
| 5.jpg | NBL-TOP-CHN-001 | Bralette de Aros y Cadenas | tops |
| 6.jpg | NBL-SKT-CHN-001 | Falda de Cadenas Drapeadas | faldas |
| 7.jpg | NBL-TOP-CHRYS-001 | Top Cristales Transparentes | tops · nuevo |
| 8.jpg | NBL-TOP-CHRYS-002 | Top Cristales Flor con Flecos | tops |
| 9.jpg | NBL-TOP-CHRYS-003 | Top Cristales Largo | tops |
| 10.jpg | NBL-TOP-CHRYSB-001 | Top Cristales Negros Flor | tops |
| 11.jpg | NBL-TOP-MIRB-001 | Top Espejos Negros Redondos | tops |
| 12.jpg | NBL-TOP-CHRYSB-002 | Top Cristales Negros Red | tops |
| 13.jpg | NBL-TOP-MIR-001 | Top Espejos Plateados | tops |
| 14.jpg | NBL-TOP-MIR-002 | Top Espejos Triangulares | tops |

---

## Pendiente

- [ ] Dominio propio — actualizar `nitebylis.com` en canonicals, sitemap y robots.txt
- [ ] Google Search Console — enviar `sitemap.xml`
- [ ] Foto de Lis en sección "Sobre mí"
- [ ] Precios reales y activación de Tienda con MercadoPago
- [ ] Formulario de contacto (Formspree)
- [ ] Instagram feed embebido

---

## Stack

Sitio estático puro — sin frameworks, sin build tools.

- HTML5 semántico
- CSS3 con variables custom (`--gold`, `--silver`, `--text-muted`…)
- JavaScript vanilla (ES6+)
- Fuentes: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) · [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) · [Jost](https://fonts.google.com/specimen/Jost) via Google Fonts
- Hosting: Netlify + GitHub

---

## Contacto

- Instagram: [@nite.bylis](https://instagram.com/nite.bylis)
- WhatsApp: +54 9 341 337-4674

---

## Desarrollo

Diseñado y desarrollado por [@hpqode](https://www.instagram.com/cestmoi_pitt/) · [LinkedIn](https://www.linkedin.com/in/hpqode) · hpqode@gmail.com

---

© 2026 NITE BY LIS — Todos los derechos reservados
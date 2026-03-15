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
│
├── css/
│   ├── styles.css          # Base global (variables, nav, hero, footer…)
│   ├── colecciones.css     # Estilos específicos de colecciones
│   ├── info.css            # Estilos específicos de info
│   └── tienda.css          # Estilos específicos de tienda [MOCKUP]
│
├── js/
│   ├── config.js           # ► Configuración global (número de WhatsApp)
│   ├── main.js             # Scroll reveal · Nav blur · Hero video
│   ├── colecciones.js      # Filtros · URL params · Scroll reveal
│   ├── info.js             # FAQ accordion · Smooth scroll
│   └── tienda.js           # Carrito · Filtros · Checkout WA [MOCKUP]
│
├── img/
│   ├── 1.jpg – 14.jpg      # Fotos de productos
│   └── (hero video → vid/hero2.mp4)
│
├── .gitignore
└── README.md
```

---

## Páginas

| Página | URL | Estado |
|---|---|---|
| Home | `index.html` | ✅ Activa |
| Colecciones | `colecciones.html` | ✅ Activa |
| Info | `info.html` | ✅ Activa |
| Tienda | `tienda.html` | 🚧 Mockup (oculta del nav) |

---

## Configuración rápida

### Cambiar número de WhatsApp
Abrir `js/config.js` y modificar **una sola línea**:

```js
const NBL_CONFIG = {
  whatsapp: '5493413374674',  // ← acá
};
```

El script reemplaza automáticamente todos los links `wa.me/` en la página al cargar.

### Agregar imágenes de productos
Colocar las imágenes en `img/` con el nombre correspondiente y actualizar el HTML de `colecciones.html`.

### Activar la Tienda
1. Descomentar en el `<nav>` de todos los HTML: `<!-- <li><a href="tienda.html">Tienda</a></li> -->`
2. Definir precios reales en `tienda.html` (atributo `data-price` en cada `.shop-card`)
3. Integrar MercadoPago SDK (ver sección más abajo)

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

**Catálogo actual:**

| ID | Nombre | Categoría |
|---|---|---|
| NBL-TOP-MESH-001 | Cota de Malla Triangular | tops · nuevo |
| NBL-TOP-MESH-002 | Cota de Malla V-Neck | tops |
| NBL-TOP-CHN-001 | Bralette de Aros y Cadenas | tops |
| NBL-SKT-CHN-001 | Falda de Cadenas Drapeadas | faldas |
| NBL-TOP-CHRYS-001 | Top Cristales Transparentes | tops · nuevo |
| NBL-TOP-CHRYS-002 | Top Cristales Flor con Flecos | tops |
| NBL-TOP-CHRYS-003 | Top Cristales Largo | tops |
| NBL-TOP-CHRYSB-001 | Top Cristales Negros Flor | tops |
| NBL-TOP-MIRB-001 | Top Espejos Negros Redondos | tops |
| NBL-TOP-CHRYSB-002 | Top Cristales Negros Red | tops |
| NBL-TOP-MIR-001 | Top Espejos Plateados | tops |
| NBL-TOP-MIR-002 | Top Espejos Triangulares | tops |
| NBL-SET-MESH-001 | Conjunto Malla Metálica | conjuntos · nuevo |
| NBL-TOP-CHN-002 | Top Cadenas y Cristales | tops |

---

## Pendiente / Roadmap

- [ ] Integrar MercadoPago SDK real en `tienda.html`
- [ ] Definir precios y activar la Tienda públicamente
- [ ] Video hero (`vid/hero2.mp4`) — agregar al repositorio o CDN
- [ ] Responsive mobile (nav hamburger, grids adaptados)
- [ ] SEO básico (meta description, og:image por página)
- [ ] Favicon
- [ ] Dominio y hosting (sugerido: Netlify o Vercel para sitio estático)

---

## Stack

Sitio estático puro — sin frameworks, sin build tools.

- HTML5 semántico
- CSS3 con variables custom (`--gold`, `--silver`, `--text-muted`…)
- JavaScript vanilla (ES6+)
- Fuentes: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) · [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) · [Jost](https://fonts.google.com/specimen/Jost) via Google Fonts

---

## Contacto

- Instagram: [@nite.bylis](https://instagram.com/nite.bylis)
- WhatsApp: +54 9 341 337-4674

---

© 2026 NITE BY LIS — Todos los derechos reservados

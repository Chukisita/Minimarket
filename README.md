# La Cosecha Market — Demo (Vue 3)

Demo de tienda online de minimarket, reestructurada con una arquitectura
ordenada y escalable para que puedas seguir modificándola sin perderte.

## Cómo correrlo

```bash
npm install       # instala las dependencias (una sola vez)
npm run dev       # levanta el servidor de desarrollo con recarga automática
npm run build     # genera la versión final para subir a un hosting
```

## Estructura de carpetas (y qué hace cada una)

```
src/
├── main.js              → Arranca la app. Conecta Vue + Pinia + Router.
├── App.vue               → El "molde": header + footer siempre visibles,
│                           y en medio se dibuja la página actual.
├── style.css             → Los "tokens" de diseño: colores, tipografías,
│                           y TODAS las clases CSS reutilizables.
│
├── router/
│   └── index.js          → El "mapa del sitio". Aquí defines qué URL
│                           muestra qué vista. Para agregar una página
│                           nueva, agregas una línea aquí.
│
├── store/
│   └── cart.js            → El "cerebro" del carrito (Pinia). Un solo
│                           lugar con la verdad: qué hay en el carrito,
│                           el subtotal, el envío, el total. Cualquier
│                           componente lee de aquí y siempre está
│                           sincronizado con los demás.
│
├── data/
│   └── products.js        → Tu catálogo. HOY son datos de ejemplo;
│                           MAÑANA reemplazas las funciones (getAllProducts,
│                           getProductById, etc.) por llamadas fetch() a
│                           tu API, y ningún componente tiene que cambiar.
│
├── components/            → Piezas reutilizables, chicas, sin "página propia":
│   ├── AppHeader.vue        Header con buscador, toggle y carrito.
│   ├── AppFooter.vue        Pie de página.
│   ├── ProductCard.vue      La tarjeta de un producto (se usa en Home,
│   │                        categorías, ofertas — un solo lugar para
│   │                        cambiar cómo se ve un producto).
│   ├── CategoryGrid.vue     Los accesos rápidos a categorías del Home.
│   └── CartDrawer.vue       El panel lateral del carrito.
│
└── views/                  → Una "página" completa por archivo:
    ├── HomeView.vue          Inicio ("/")
    ├── CategoryView.vue      Categoría / resultados de búsqueda ("/categoria/:nombre")
    ├── ProductView.vue       Detalle de producto ("/producto/:id")
    ├── CheckoutView.vue      Proceso de pago ("/checkout")
    └── ConfirmationView.vue  Confirmación de compra ("/gracias")
```

## La regla de oro para no perderte

- ¿Es algo que se ve en TODA la app (header, footer, carrito)? → `components/`
- ¿Es una pantalla completa a la que se llega por una URL? → `views/`
- ¿Es un dato o una regla de negocio (precios, stock, qué hay en el carrito)? → `store/` o `data/`
- ¿Es solo apariencia (color, tamaño, espaciado)? → `style.css`

Si sigues esa regla, cada archivo nuevo que agregues sabe exactamente
dónde va, y nunca vuelves a tener un solo archivo gigante con todo
mezclado.

## Conectar tu backend

Cuando tengas tu API lista, solo tocas `src/data/products.js`:
reemplaza el arreglo `PRODUCTS` y las funciones `getAllProducts`,
`getProductById`, etc. por `fetch()` a tus endpoints reales (puedes
usar `async/await`). El resto de la app (componentes y vistas) no
necesita ningún cambio, porque nunca importan los datos directamente:
siempre pasan por esas funciones.

Lo mismo aplica para el checkout: en `CheckoutView.vue`, la función
`confirmOrder()` es donde harías el `POST` real a tu servidor con los
datos del formulario y el carrito.

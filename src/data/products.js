// Este archivo es tu "base de datos" temporal mientras conectas el backend.
// Mañana, cuando tengas tu API real, solo reemplazas esta función por un
// fetch() a tu servidor — ningún componente tiene que cambiar, porque
// todos consumen products.js, nunca datos "hardcodeados" directamente.

export const CATEGORIES = [
  { name: 'Frutas y Verduras', icon: '🥑' },
  { name: 'Carnes y Pescados', icon: '🍗' },
  { name: 'Abarrotes', icon: '🍚' },
  { name: 'Lácteos', icon: '🥛' },
  { name: 'Bebidas', icon: '🥤' },
  { name: 'Limpieza', icon: '🧴' },
]

const PRODUCTS = [
  { id: 1, name: 'Arroz Costeño Extra 5kg', brand: 'Costeño', cat: 'Abarrotes', icon: '🍚', price: 24.90, old: 29.90, stock: 40, best: true, offer: true, desc: 'Arroz extra, grano largo, ideal para toda ocasión.' },
  { id: 2, name: 'Aceite Vegetal Primor 1L', brand: 'Primor', cat: 'Abarrotes', icon: '🧴', price: 9.90, old: null, stock: 22, best: true, offer: false, desc: 'Aceite vegetal 100% girasol, libre de colesterol.' },
  { id: 3, name: 'Azúcar Blanca Costeño 1kg', brand: 'Costeño', cat: 'Abarrotes', icon: '🧂', price: 4.20, old: 5.10, stock: 35, best: false, offer: true, desc: 'Azúcar rubia refinada de caña, ideal para repostería.' },
  { id: 4, name: 'Leche Evaporada Gloria 400g', brand: 'Gloria', cat: 'Lácteos', icon: '🥛', price: 4.50, old: null, stock: 60, best: true, offer: false, desc: 'Leche evaporada entera, fuente de calcio.' },
  { id: 5, name: 'Yogurt Griego Laive 1kg', brand: 'Laive', cat: 'Lácteos', icon: '🍶', price: 14.90, old: 18.90, stock: 18, best: false, offer: true, desc: 'Yogurt griego natural, alto en proteínas.' },
  { id: 6, name: 'Queso Fresco Laive 500g', brand: 'Laive', cat: 'Lácteos', icon: '🧀', price: 12.50, old: null, stock: 14, best: false, offer: false, desc: 'Queso fresco pasteurizado, corte tradicional.' },
  { id: 7, name: 'Coca Cola 1.5L', brand: 'Coca-Cola', cat: 'Bebidas', icon: '🥤', price: 6.00, old: null, stock: 50, best: true, offer: false, desc: 'Bebida gaseosa sabor cola, presentación familiar.' },
  { id: 8, name: 'Cerveza Pilsen Pack x6', brand: 'Pilsen', cat: 'Bebidas', icon: '🍺', price: 24.90, old: 34.90, stock: 26, best: true, offer: true, desc: 'Pack de 6 cervezas Pilsen Callao 355ml. Promoción 3x2.' },
  { id: 9, name: 'Agua San Luis 1L', brand: 'San Luis', cat: 'Bebidas', icon: '💧', price: 2.00, old: null, stock: 80, best: false, offer: false, desc: 'Agua de mesa sin gas.' },
  { id: 10, name: 'Pechuga de Pollo 1kg', brand: 'Avícola', cat: 'Carnes y Pescados', icon: '🍗', price: 16.90, old: 19.90, stock: 20, best: true, offer: true, desc: 'Pechuga de pollo fresca, empacada al vacío.' },
  { id: 11, name: 'Filete de Salmón 500g', brand: 'Del Mar', cat: 'Carnes y Pescados', icon: '🐟', price: 28.00, old: null, stock: 9, best: false, offer: false, desc: 'Filete de salmón fresco, apto para parrilla o horno.' },
  { id: 12, name: 'Palta Hass x kg', brand: 'Agro Perú', cat: 'Frutas y Verduras', icon: '🥑', price: 7.90, old: null, stock: 45, best: true, offer: false, desc: 'Palta hass madura a punto, cultivo peruano.' },
  { id: 13, name: 'Plátano de Seda x kg', brand: 'Agro Perú', cat: 'Frutas y Verduras', icon: '🍌', price: 3.50, old: 4.20, stock: 70, best: false, offer: true, desc: 'Plátano de seda dulce, fuente de potasio.' },
  { id: 14, name: 'Detergente Ariel 1kg', brand: 'Ariel', cat: 'Limpieza', icon: '🧺', price: 14.90, old: 17.90, stock: 16, best: false, offer: true, desc: 'Detergente en polvo, remueve manchas difíciles.' },
  { id: 15, name: 'Papel Higiénico Elite x12', brand: 'Elite', cat: 'Limpieza', icon: '🧻', price: 19.90, old: null, stock: 24, best: true, offer: false, desc: 'Papel higiénico doble hoja, pack de 12 rollos.' },
  { id: 16, name: 'Lejía Sapolio 1L', brand: 'Sapolio', cat: 'Limpieza', icon: '🧴', price: 5.50, old: null, stock: 30, best: false, offer: false, desc: 'Lejía multiuso para desinfección del hogar.' },
]

// Funciones "helper" para no repetir lógica de búsqueda en cada componente.
export function getAllProducts() {
  return PRODUCTS
}
export function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id))
}
export function getProductsByCategory(catName) {
  if (catName === 'Ofertas del día' || catName === 'Cyber Wow') {
    return PRODUCTS.filter(p => p.offer)
  }
  if (catName === 'Los más vendidos') {
    return PRODUCTS.filter(p => p.best)
  }
  return PRODUCTS.filter(p => p.cat === catName)
}
export function getBestSellers() {
  return PRODUCTS.filter(p => p.best)
}
export function getOffers() {
  return PRODUCTS.filter(p => p.offer)
}
export function searchProducts(query) {
  const q = query.toLowerCase()
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
  )
}

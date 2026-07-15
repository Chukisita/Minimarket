import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// "base" le dice a la app en qué "carpeta" del dominio va a vivir.
// GitHub Pages publica este proyecto en:
//   https://chukisita.github.io/Minimarket/
// por eso la base tiene que ser "/Minimarket/" (con las mayúsculas
// exactas del nombre del repositorio, y con / al inicio y al final).
export default defineConfig({
  base: '/Minimarket/',
  plugins: [vue()]
})

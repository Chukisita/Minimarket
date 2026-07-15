import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuración de Vite: el "empaquetador" que junta todos los archivos
// .vue en algo que el navegador puede entender, y te da un servidor
// de desarrollo con recarga automática (npm run dev).
export default defineConfig({
  plugins: [vue()]
})

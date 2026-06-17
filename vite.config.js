import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tambahkan baris ini jika Anda menggunakan Tailwind v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tambahkan ini
  ],
})
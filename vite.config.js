import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // Explicitly forces Tailwind v4 to scan every single React file for your gap and margin classes
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    }),
  ],
})
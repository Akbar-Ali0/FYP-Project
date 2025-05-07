# FYP-Project
 Final Year Project of BSCS "PalmPay"

# Used Packages:
    Tailwind
        npm install tailwindcss @tailwindcss/vite

        ### vite.config.js ###
        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'  <----- add this
        export default defineConfig({
            plugins: [
                tailwindcss(), <----- add this
            ],
        })

    react-router-dom
    react-hook-form
    lucide-react

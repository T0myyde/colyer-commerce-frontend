import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: true},
    css: ['~/app/assets/css/main.css'],
    modules: [
        'nuxt-lucide-icons'
    ],
    lucide: {
        namePrefix: 'Icon'
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    plugins: [
        '~/plugins/mouse-effect.client.ts',
        '~/plugins/analytics.ts',
    ],
});
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    ,
            // workbox: {
            //     globPatterns: ["*/"],
            //     runtimeCaching: [{
            //         handler: 'NetworkOnly',
            //         urlPattern: /^https:\/\/api-rmc\.backefra\.com\/.*/i,
            //         // urlPattern: /^https:\/\/api-heroes\.dev\/.*/i,
            //         // urlPattern: /\/api\/.\/.json/,
            //         method: 'POST',
            //         options: {
            //             backgroundSync: {
            //                 name: 'myQueueName',
            //                 options: {
            //                     maxRetentionTime: 60 * 60 * 24 * 365 // <== 365 days
            //                 }
            //             }
            //         }
            //     },
            //         // {
            //         //     urlPattern: /^https:\/\/api-heroes\.dev\/.*/i,
            //         //     handler: 'StaleWhileRevalidate',
            //         //     options: {
            //         //         cacheName: 'api-contenido',
            //         //         expiration: {
            //         //             maxEntries: 1000,
            //         //             maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            //         //         },
            //         //         cacheableResponse: {
            //         //             statuses: [0, 200]
            //         //         }
            //         //     }
            //         // },
            //         {
            //             urlPattern: /^https:\/\/info-rmc\.backefra\.com\/.*/i,
            //             // urlPattern: /^https:\/\/enki-v1-production\.dev\/.*/i,
            //             handler: 'StaleWhileRevalidate',
            //             options: {
            //                 cacheName: 'imagen-contenido',
            //                 expiration: {
            //                     maxEntries: 1000,
            //                     maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            //                 },
            //                 cacheableResponse: {
            //                     statuses: [0, 200]
            //                 }
            //             }
            //         }
            //     ]
            // }
        })
    ]
})

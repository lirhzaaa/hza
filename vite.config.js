import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'public/build',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: ['resources/js/app.js', 'resources/css/app.css']
        },
        assetsDir: '_assets'
    },
    server: {
        strictPort: true,
        port: 3000
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources', import.meta.url))
        }
    },
    publicDir: 'resources/public'
});

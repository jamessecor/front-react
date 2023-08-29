import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    publicDir: 'public',
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('images')) {
                        return id.toString().split('images/')[1].split('/')[0].toString();
                    }
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
});